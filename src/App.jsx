import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Code, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  ChevronDown,
  ExternalLink,
  Download,
  Menu,
  X,
  Sparkles,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import profileImage from './assets/profile.jpg'
import './App.css'

// Resume data
const resumeData = {
  "name": "Muhammad Amjad",
  "title": "Data Scientist | ML Engineer | AI Engineer | BI Specialist",
  "contact": {
    "phone": "+92-3203978434",
    "email": "mamjad15153@gmail.com"
  },
  "education": [
    "Bachelors of Science in Artificial Intelligence (September, 2022 - present)",
    "Air University, Islamabad"
  ],
  "certifications": [
    "Introduction to Python (Datacamp)",
    "Intermediate Python (Datacamp)",
    "Working with OpenAI Api's (Datacamp)",
    "Programming for AI (Air University)",
    "Python for Machine Learning (Great Learning)",
    "Introduction to Generative AI (Google)"
  ],
  "projects": [
    {
      "title": "GEFCom2014 - Probabilistic Forecasting of Hourly Energy Load",
      "tech": "Python",
      "description": "Solved the GEFCom2014, employing quantile regression for probabilistic hourly energy load forecasting. Analyzed historical weather and load data, considering seasonality, holidays, and time patterns. This improved the reliability of energy demand predictions for utility operations."
    },
    {
      "title": "Decision Tree Classifier: Impact of Sleep and Co-Curriculars on Student Grades",
      "tech": "Python",
      "description": "Developed a decision tree classifier to analyze the impact of sleep and co-curricular activities on student grades. Followed a full ML pipeline, uncovering behavioral patterns linked to academic performance. This highlighted feature selection and model interpretability."
    },
    {
      "title": "Brain Tumor Segmentation",
      "tech": "Python",
      "description": "Using medical imaging and machine learning, this project automates the segmentation of brain tumors from MRI scans, aiding in medical diagnostics and treatment planning."
    },
    {
      "title": "Netflix Movie Data Analysis",
      "tech": "Python",
      "description": "This project involves manipulating and visualizing Netflix movie data to uncover trends, patterns, and preferences among viewers, enhancing understanding of movie consumption habits."
    },
    {
      "title": "Iris Flower Classification",
      "tech": "Python",
      "description": "Using machine learning, this project classifies iris flowers into species based on sepal and petal measurements, demonstrating a fundamental classification problem with a well-known dataset."
    },
    {
      "title": "AI Robot with Arduino and Python",
      "tech": "Python/Arduino",
      "description": "Integrating Arduino and Python, this project develops an AI-driven robot using digital logic principles, focusing on building a functional autonomous system."
    },
    {
      "title": "Ticket Booth Management System",
      "tech": "C++",
      "description": "Implemented in C++, this system manages ticket sales, seat reservations, and customer transactions, providing efficient management for ticketing operations."
    },
    {
      "title": "Snake Game with GUI",
      "tech": "C++",
      "description": "Developed in C++, this project creates a classic snake game with a graphical user interface (GUI), showcasing interactive game development skills."
    }
  ],
  "skills": {
    "programming": ["C++", "Python"],
    "data_ml": ["Machine Learning", "Data Science", "Data Visualization", "Data Analysis", "Business Analytics", "Business Intelligence"],
    "tools": ["MS Office"],
    "soft_skills": ["Problem Solving", "Management & Coordination"]
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Interactive mouse follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
        
        {/* Additional background elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-lg animate-ping"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              MA
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-cyan-300'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-cyan-400 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-2"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 10 }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-cyan-300'
                    }`}
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <motion.div
                className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage} 
                  alt="Muhammad Amjad" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {resumeData.name}
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            {resumeData.title}
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 border-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
                <Zap size={16} className="group-hover:animate-bounce" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-gradient-to-r from-cyan-400 to-purple-500 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown size={32} className="text-cyan-400 hover:text-purple-400 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-xl shadow-purple-500/10">
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-300">
                    I'm a passionate Data Scientist and ML Engineer currently pursuing my Bachelor's in Artificial Intelligence at Air University, Islamabad. 
                    With a strong foundation in machine learning, data analysis, and AI technologies, I specialize in creating intelligent solutions that drive business value.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-300">
                    My expertise spans across various domains including predictive modeling, computer vision, natural language processing, and business intelligence. 
                    I'm particularly interested in applying AI to solve real-world problems and creating automated systems that enhance productivity.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Mail size={20} />
                      <span>{resumeData.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Phone size={20} />
                      <span>{resumeData.contact.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Projects Completed", value: "8+", color: "from-cyan-400 to-blue-500" },
                  { label: "Technologies", value: "10+", color: "from-purple-400 to-pink-500" },
                  { label: "Certifications", value: "6+", color: "from-green-400 to-cyan-500" },
                  { label: "Experience", value: "2+ Years", color: "from-yellow-400 to-orange-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20 shadow-lg"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Programming", skills: resumeData.skills.programming, icon: Code, color: "from-cyan-400 to-blue-500" },
              { title: "Data & ML", skills: resumeData.skills.data_ml, icon: Briefcase, color: "from-purple-400 to-pink-500" },
              { title: "Tools", skills: resumeData.skills.tools, icon: Award, color: "from-green-400 to-cyan-500" },
              { title: "Soft Skills", skills: resumeData.skills.soft_skills, icon: User, color: "from-yellow-400 to-orange-500" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-purple-500/10">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-slate-700 to-slate-600 text-cyan-300 hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all duration-300 border border-purple-500/20"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 group shadow-xl shadow-purple-500/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 group-hover:text-cyan-400 transition-colors text-white">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className="mb-4 border-purple-400 text-purple-300 bg-purple-500/10"
                        >
                          {project.tech}
                        </Badge>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-purple-500/10">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{resumeData.education[0]}</CardTitle>
                <CardDescription className="text-lg text-cyan-300">{resumeData.education[1]}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-purple-500/10">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award size={20} className="text-white" />
                    </div>
                    <CardTitle className="text-sm leading-relaxed text-white">{cert}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and data science.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-purple-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-cyan-300">{resumeData.contact.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-purple-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-purple-300">{resumeData.contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-4 pt-4">
                  <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button size="icon" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white shadow-lg shadow-cyan-400/25">
                      <Github size={20} />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button size="icon" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white shadow-lg shadow-purple-400/25">
                      <Linkedin size={20} />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 shadow-xl shadow-purple-500/10">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows="5"
                          className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none text-white placeholder-slate-400"
                        ></textarea>
                      </div>
                      <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 border-0">
                        <span className="relative z-10">Send Message</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2024 {resumeData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

