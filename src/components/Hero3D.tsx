import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Box,
  Sphere,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

// Fresh 3D Laptop with Clean Design
const FreshLaptop = () => {
  const laptopRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      laptopRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.05;

      if (hovered) {
        laptopRef.current.scale.setScalar(1.05);
      } else {
        laptopRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group
      ref={laptopRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Laptop Base - Clean Silver */}
      <Box args={[4, 0.3, 2.5]} position={[0, -0.15, 0]}>
        <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.3} />
      </Box>

      {/* Laptop Screen Frame */}
      <Box
        args={[3.8, 2.4, 0.15]}
        position={[0, 1.2, -1.25]}
        rotation={[-0.1, 0, 0]}
      >
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Screen Display - Fresh Blue */}
      <Box
        args={[3.5, 2.1, 0.05]}
        position={[0, 1.2, -1.18]}
        rotation={[-0.1, 0, 0]}
      >
        <meshStandardMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </Box>

      {/* Clean Code Display */}
      <Text
        position={[0, 1.2, -1.15]}
        rotation={[-0.1, 0, 0]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/JetBrainsMono-Regular.woff"
      >
        {`const developer = {\n  name: "Tanmay Samdani",\n  location: "Dublin, Ireland",\n  expertise: ["Full-Stack", "AI/ML"],\n  passion: "Innovation"\n};`}
      </Text>

      {/* Keyboard */}
      <Box args={[3.5, 0.1, 2]} position={[0, 0.05, 0.2]}>
        <meshStandardMaterial color="#f8fafc" metalness={0.3} roughness={0.7} />
      </Box>

      {/* Trackpad */}
      <Box args={[1, 0.05, 0.8]} position={[0, 0.1, 0.8]}>
        <meshStandardMaterial color="#e2e8f0" metalness={0.5} roughness={0.4} />
      </Box>
    </group>
  );
};

// Floating Tech Orbs with Fresh Colors
const TechOrb = ({
  position,
  technology,
  color,
  delay = 0,
}: {
  position: [number, number, number];
  technology: string;
  color: string;
  delay?: number;
}) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2 + delay;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={ref} position={position}>
        <Sphere args={[0.3]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.1}
            metalness={0.6}
            roughness={0.4}
          />
        </Sphere>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.12}
          color="#1f2937"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Medium.woff"
        >
          {technology}
        </Text>
      </group>
    </Float>
  );
};

// Fresh 3D Scene
const FreshScene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 3, 10);
  }, [camera]);

  const techStack = [
    {
      tech: "React",
      color: "#3b82f6",
      position: [-4, 2, -1] as [number, number, number],
      delay: 0,
    },
    {
      tech: "Node.js",
      color: "#10b981",
      position: [4, 1, -1] as [number, number, number],
      delay: 1,
    },
    {
      tech: "Python",
      color: "#8b5cf6",
      position: [-3, -1, 2] as [number, number, number],
      delay: 2,
    },
    {
      tech: "LangChain",
      color: "#f59e0b",
      position: [3, -2, 1] as [number, number, number],
      delay: 3,
    },
    {
      tech: "Django",
      color: "#ef4444",
      position: [-5, 0, 1] as [number, number, number],
      delay: 4,
    },
    {
      tech: "AI/ML",
      color: "#ec4899",
      position: [5, 2, 0] as [number, number, number],
      delay: 5,
    },
  ];

  return (
    <>
      {/* Clean Lighting Setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#8b5cf6" />

      {/* Environment */}
      <Environment preset="city" />

      {/* Main Laptop */}
      <FreshLaptop />

      {/* Tech Stack Orbs */}
      {techStack.map((tech, index) => (
        <TechOrb
          key={index}
          position={tech.position}
          technology={tech.tech}
          color={tech.color}
          delay={tech.delay}
        />
      ))}

      {/* Subtle Contact Shadows */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.2}
        scale={15}
        blur={1}
        far={8}
        resolution={256}
        color="#1f2937"
      />

      {/* Clean Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3.5}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
};

// Main Hero Component with Fresh Design
const Hero3D = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Fresh 3D Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <FreshScene />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Fresh Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name & Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-premium-display text-gray-800">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tanmay
              </motion.span>
              <motion.span
                className="block text-shimmer-fresh"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Samdani
              </motion.span>
            </h1>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-premium-subheading text-fresh-blue-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>Full-Stack Developer</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span>AI/ML Enthusiast</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span>Dublin, Ireland</span>
            </motion.div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-premium-subheading text-gray-600 leading-relaxed">
              Master's student at{" "}
              <motion.span
                className="text-fresh-blue-600 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Trinity College Dublin
              </motion.span>
              , crafting scalable solutions with{" "}
              <motion.span
                className="text-fresh-violet-600 font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                React, Python, Django & LangChain
              </motion.span>
              . Passionate about building intelligent applications that bridge
              traditional development with cutting-edge AI.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="/about"
              className="btn-fresh flex items-center space-x-3 text-lg focus-fresh"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Skills</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/contact"
              className="btn-fresh-secondary flex items-center space-x-3 text-lg focus-fresh"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500"
          >
            <a
              href="mailto:tanmaysamdani12345@gmail.com"
              className="hover:text-fresh-blue-600 transition-colors duration-300 text-sm"
            >
              tanmaysamdani12345@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="tel:+353871326213"
              className="hover:text-fresh-blue-600 transition-colors duration-300 text-sm"
            >
              +353-871326213
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fresh Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-xs font-medium tracking-wide">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-fresh-blue-500 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
