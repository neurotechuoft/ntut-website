import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeDModelViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const brainRef = useRef<THREE.Mesh | null>(null);
  const lastScrollY = useRef(0);
  const isMobile = useRef(window.innerWidth <= 768);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing canvas elements first
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Camera setup with mobile-friendly FOV
    const camera = new THREE.PerspectiveCamera(
      isMobile.current ? 60 : 45,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, isMobile.current ? 5 : 4); // set camera position to the center of the scene

    // Renderer setup with mobile optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1); // White background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add hemisphere light for better overall illumination
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x562c81, 0.5);
    hemisphereLight.position.set(0, 10, 0);
    scene.add(hemisphereLight);

    // Add fog for depth with light color
    scene.fog = new THREE.Fog(0xffffff, 5, 15);

    // Load the model
    const loader = new OBJLoader();
    const modelPath = '/Free_Brain_2.obj';
    console.log('Attempting to load model from:', modelPath);

    let modelLoaded = false;

    // Auto-rotation function with mobile optimization
    let rotationAnimationId: number;
    const autoRotate = () => {
      if (brainRef.current) {
        brainRef.current.rotation.y += isMobile.current ? 0.0002 : 0.0006;
      }
      rotationAnimationId = requestAnimationFrame(autoRotate);
    };

    loader.load(
      modelPath,
      (object) => {
        if (modelLoaded) return;
        modelLoaded = true;

        console.log('Model loaded successfully', object);
        setIsLoading(false);

        let brainMesh: THREE.Mesh | null = null;
        object.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            console.log('Found mesh:', child.name);
            brainMesh = child;
            child.material = new THREE.MeshPhongMaterial({
              color: 0x562c81, // Changed to purple
              shininess: isMobile.current ? 80 : 100,
              specular: 0xffffff,
              emissive: 0x6b4b9c, // Lighter purple glow
              transparent: true,
              opacity: 0.9
            });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        if (brainMesh) {
          const mesh = brainMesh as THREE.Mesh;
          brainRef.current = mesh;

          // Center the brain mesh
          const box = new THREE.Box3().setFromObject(mesh);
          const center = box.getCenter(new THREE.Vector3());
          mesh.position.x = -center.x;
          mesh.position.y = -center.y;
          mesh.position.z = -center.z;

          // Scale the brain mesh with mobile optimization
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = (isMobile.current ? 1.5 : 2) / maxDim;
            mesh.scale.set(scale, scale, scale);
          }

          // Set brain color to match the theme
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.color.setHex(0xffffff);
          material.metalness = 0.3;
          material.roughness = 0.7;

          scene.add(mesh);

          // Position camera based on device
          camera.position.set(0, 0, isMobile.current ? 5 : 4);
          camera.lookAt(new THREE.Vector3(0, 0, 0));

          // Start auto-rotation
          autoRotate();
        }
      },
      (xhr) => {
        const progress = (xhr.loaded / xhr.total) * 100;
        console.log(`${progress.toFixed(1)}% loaded`);
        setLoadingProgress(progress);
      },
      (error) => {
        console.error('Error loading model:', error);
        setIsLoading(false);
        setLoadError(`Failed to load model: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    );

    // Handle scroll with mobile optimization
    const handleScroll = () => {
      if (!brainRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (scrollDelta !== 0) {
        brainRef.current.rotation.y += scrollDelta * (isMobile.current ? 0.0005 : 0.001);
      }

      lastScrollY.current = currentScrollY;
    };

    // Touch controls for mobile
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0].clientX;
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!brainRef.current) return;

      const touchX = event.touches[0].clientX;
      const touchY = event.touches[0].clientY;

      const deltaX = touchX - touchStartX.current;
      const deltaY = touchY - touchStartY.current;

      brainRef.current.rotation.y += deltaX * 0.005;
      brainRef.current.rotation.x += deltaY * 0.005;

      touchStartX.current = touchX;
      touchStartY.current = touchY;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize with mobile detection
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      isMobile.current = window.innerWidth <= 768;

      camera.aspect = width / height;
      camera.fov = isMobile.current ? 85 : 75;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);

      if (rotationAnimationId) {
        cancelAnimationFrame(rotationAnimationId);
      }

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#562c81] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#562c81] font-roboto">Loading 3D Model... {loadingProgress.toFixed(0)}%</p>
          </div>
        </div>
      )}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="text-center text-red-500 font-roboto">
            <p>{loadError}</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full"></div>
    </div>
  );
};

export default ThreeDModelViewer;