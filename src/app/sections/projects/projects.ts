import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';


// Project data interface
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    type?: 'screenshots' | 'gradient'; // Add support for screenshot type
    screenshots?: string[];           // Array of screenshot URLs (if screenshots mode)
    icon: string;
    gradient: string;
  };
  category: {
    label: string;
    color: string;
    emoji: string;
  };
  techStack: {
    main: string[]; // For overlay
    detailed: { name: string; color: string }[]; // For detailed list below
  };
  buttons: {
    primary: { label: string; icon: string | IconDefinition; action?: () => void };
  };
}

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef<HTMLElement>;

  // Scroll state tracking
  canScrollLeft = false;
  canScrollRight = true;
  currentSlideIndex = 0;

  // Easy to add/modify projects here!
  // Add Fitcore project as the first item in the array
  projects: Project[] = [
    // 1. Mystica
    {
      id: 'mystica-tarot',
      title: 'Mystica',
      subtitle: 'Digital Tarot Companion',
      description: `A beautiful tarot reading app with intuitive card shuffling, multiple reading spreads, and detailed interpretations. Features 78 high-resolution cards, reading history, and offline functionality for mystical guidance anywhere.`,
      image: {
        type: 'screenshots',
        screenshots: [
          '/images/mystica/home.jpg',
          '/images/mystica/profile.jpg',
          '/images/mystica/reading.jpg'
        ],
        icon: 'auto_awesome',
        gradient: 'from-purple-600 via-indigo-700 to-purple-800'
      },
      category: {
        label: 'Mobile',
        color: 'bg-purple-600',
        emoji: '🔮'
      },
      techStack: {
        main: ['Kotlin', 'Android', 'Room DB', 'Material Design'],
        detailed: [
          {name: 'Kotlin', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'},
          {name: 'Jetpack Compose', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'},
          {name: 'Room Database', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'},
          {
            name: 'Material Design 3',
            color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
          },
          {name: 'Architecture Components', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'},
          {name: 'Coroutines', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'}
        ]
      },
      buttons: {
        primary: {
          label: 'Play Store',
          icon: faGooglePlay,   // Use FA Play Store icon
          action: () => window.open('https://play.google.com/store/apps/details?id=com.kyokosawada.mystica', '_blank')
        }
      }
    },
    // 2. QuickPOS (POS System)
    {
      id: 'pos-android',
      title: 'QuickPOS',
      subtitle: 'Modern Retail pos (Android)',
      description: `A complete mobile point-of-sale solution for small businesses. Features a modern dashboard, real-time cart and sales tracking, product inventory management, receipt history, and advanced settings. Supports multiple payment methods, tax rules, offline mode, and analytics—all within an intuitive Material UI built for speed and reliability.`,
      image: {
        type: 'screenshots',
        screenshots: [
          '/images/pos/dashboard.png',
          '/images/pos/cart.png',
          '/images/pos/products.png',
          '/images/pos/receipts.png',
          '/images/pos/settings.png'
        ],
        icon: 'point_of_sale',
        gradient: 'from-green-400 via-emerald-500 to-blue-500'
      },
      category: {
        label: 'Mobile',
        color: 'bg-green-600',
        emoji: '🛒'
      },
      techStack: {
        main: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Material Design 3'],
        detailed: [
          {name: 'Kotlin', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'},
          {name: 'Jetpack Compose', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'},
          {name: 'Room DB', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'},
          {
            name: 'Material Design 3',
            color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
          },
          {name: 'Android', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'},
          {name: 'Coroutines', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'}
        ]
      },
      buttons: {
        primary: {
          label: 'GitHub',
          icon: faGithub, // Use actual FontAwesome GitHub icon
          action: () => window.open('https://github.com/kyokosawada/POS', '_blank')
        }
      }
    },
    // 3. Fitcore
    {
      id: 'fitcore',
      title: 'Fitcore',
      subtitle: 'Personal Fitness & Progress Tracker',
      description: `Transform your body and mind with Fitcore! This modern fitness web app empowers you to track results, engage with real coaches, and visualize your journey. Features include personalized plans, goal setting, mobile-optimized workouts, live progress tracking, and a vibrant community. Built for fast results and lifetime access!`,
      image: {
        type: 'screenshots',
        screenshots: [
          '/images/fitcore/home.png', // Main (laptop/desktop) homepage
          '/images/fitcore/home.png' // Use the same desktop screenshot for both placements for now
        ],
        icon: 'laptop',
        gradient: 'from-pink-500 via-indigo-400 to-blue-500'
      },
      category: {
        label: 'Web App',
        color: 'bg-blue-500',
        emoji: '💪'
      },
      techStack: {
        main: ['Angular', 'Tailwind CSS v4', 'TypeScript'],
        detailed: [
          {name: 'Angular 20', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'},
          {name: 'Tailwind CSS v4', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'},
          {name: 'TypeScript', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'}
        ]
      },
      buttons: {
        primary: {
          label: 'Live Demo',
          icon: 'play_arrow',
          action: () => window.open('https://fitcore-nu.vercel.app', '_blank')
        }
      }
    },
    // 4. Ecommerce
    {
      id: 'ecommerce',
      title: 'Modern E-Commerce Platform',
      subtitle: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard. Features responsive design and optimized performance.',
      image: {
        icon: 'storefront',
        gradient: 'from-blue-500 via-purple-600 to-indigo-700'
      },
      category: {
        label: 'Web App',
        color: 'bg-blue-600',
        emoji: '🌐'
      },
      techStack: {
        main: ['Angular', 'Node.js', 'MongoDB', 'Express'],
        detailed: [
          {name: 'Angular 17', color: 'bg-red-100 text-red-700'},
          {name: 'Node.js', color: 'bg-green-100 text-green-700'},
          {name: 'Express', color: 'bg-green-100 text-green-700'},
          {name: 'MongoDB', color: 'bg-blue-100 text-blue-700'},
          {name: 'Stripe API', color: 'bg-purple-100 text-purple-700'}
        ]
      },
      buttons: {
        primary: {
          label: 'Live Demo',
          icon: 'launch',
          action: () => window.open('https://your-ecommerce-demo.com', '_blank')
        }
      }
    },
    // 5. Task Manager
    {
      id: 'task-manager',
      title: 'Collaborative Task Manager',
      subtitle: 'Task Manager',
      description: 'Cross-platform productivity app with real-time collaboration, smart notifications, and offline synchronization. Built with modern Android development practices.',
      image: {
        icon: 'task_alt',
        gradient: 'from-purple-500 via-pink-600 to-rose-500'
      },
      category: {
        label: 'Mobile',
        color: 'bg-purple-600',
        emoji: '📱'
      },
      techStack: {
        main: ['Kotlin', 'Android', 'Firebase', 'Room DB'],
        detailed: [
          {name: 'Kotlin', color: 'bg-orange-100 text-orange-700'},
          {name: 'Android', color: 'bg-green-100 text-green-700'},
          {name: 'Firebase', color: 'bg-yellow-100 text-yellow-700'},
          {name: 'Room DB', color: 'bg-blue-100 text-blue-700'},
          {name: 'Jetpack Compose', color: 'bg-purple-100 text-purple-700'}
        ]
      },
      buttons: {
        primary: {
          label: 'Play Store',
          icon: faGooglePlay,   // Use FA Play Store icon
          action: () => window.open('https://play.google.com/store/apps/your-task-app', '_blank')
        }
      }
    },
    // 6. API Service
    {
      id: 'api-service',
      title: 'High-Performance API',
      subtitle: 'REST API Service',
      description: 'Scalable REST API with JWT authentication, Redis caching, rate limiting, and comprehensive documentation. Handles 1000+ requests per second with optimal response times.',
      image: {
        icon: 'api',
        gradient: 'from-green-500 via-teal-600 to-emerald-600'
      },
      category: {
        label: 'API',
        color: 'bg-green-600',
        emoji: '🔧'
      },
      techStack: {
        main: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
        detailed: [
          {name: 'Spring Boot', color: 'bg-green-100 text-green-700'},
          {name: 'PostgreSQL', color: 'bg-blue-100 text-blue-700'},
          {name: 'Redis', color: 'bg-red-100 text-red-700'},
          {name: 'JWT', color: 'bg-yellow-100 text-yellow-700'},
          {name: 'Docker', color: 'bg-purple-100 text-purple-700'}
        ]
      },
      buttons: {
        primary: {
          label: 'API Docs',
          icon: 'description',
          action: () => window.open('https://your-api-docs.com', '_blank')
        }
      }
    },
    // 7. Automation Tool
    {
      id: 'automation-tool',
      title: 'Smart Automation Platform',
      subtitle: 'Automation Tool',
      description: 'Intelligent workflow automation platform with n8n integration, custom triggers, and advanced scheduling. Helps businesses automate repetitive tasks and improve efficiency.',
      image: {
        icon: 'psychology',
        gradient: 'from-orange-500 via-red-500 to-pink-600'
      },
      category: {
        label: 'Automation',
        color: 'bg-orange-600',
        emoji: '🤖'
      },
      techStack: {
        main: ['Python', 'n8n', 'FastAPI', 'PostgreSQL'],
        detailed: [
          {name: 'Python', color: 'bg-blue-100 text-blue-700'},
          {name: 'FastAPI', color: 'bg-green-100 text-green-700'},
          {name: 'n8n', color: 'bg-purple-100 text-purple-700'},
          {name: 'PostgreSQL', color: 'bg-blue-100 text-blue-700'},
          {name: 'Celery', color: 'bg-green-100 text-green-700'}
        ]
      },
      buttons: {
        primary: {
          label: 'Live Demo',
          icon: 'play_arrow',
          action: () => window.open('https://your-automation-demo.com', '_blank')
        }
      }
    }
  ];

  ngAfterViewInit() {
    // Initialize scroll state after view initialization
    setTimeout(() => {
      this.updateScrollState();
    }, 100);
  }

  // Scroll left functionality
  scrollLeft() {
    const container = this.projectsContainer.nativeElement;
    const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of container width
    container.scrollBy({left: -scrollAmount, behavior: 'smooth'});
  }

  // Scroll right functionality
  scrollRight() {
    const container = this.projectsContainer.nativeElement;
    const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of container width
    container.scrollBy({left: scrollAmount, behavior: 'smooth'});
  }

  // Handle scroll events to update button states
  onScroll() {
    this.updateScrollState();
    this.updateCurrentSlide();
  }

  // Update scroll button states
  private updateScrollState() {
    const container = this.projectsContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;
    this.canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 1);
  }

  // Update current slide for mobile indicators
  private updateCurrentSlide() {
    const container = this.projectsContainer.nativeElement;
    // Calculate card width based on responsive breakpoints
    const containerWidth = container.clientWidth;
    let cardWidth = 288; // w-72 (default for mobile)
    let gap = 16; // gap-4 (default for mobile)

    // Check for responsive breakpoints (Tailwind's sm: is 640px)
    if (containerWidth >= 640) {
      cardWidth = 320; // w-80 (sm breakpoint)
      gap = 24; // gap-6 (sm breakpoint)
    }
    if (containerWidth >= 768) {
      cardWidth = 384; // w-96 (md breakpoint)
    }

    const itemWidth = cardWidth + gap;
    this.currentSlideIndex = Math.round(container.scrollLeft / itemWidth);
  }

  // Check if a slide is active (for mobile indicators)
  isActiveSlide(index: number): boolean {
    return index === this.currentSlideIndex;
  }


  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Method to handle button clicks
  handleButtonClick(action?: () => void) {
    if (action) {
      action();
    }
  }

  // Easy method to add a new project
  addProject(project: Project) {
    this.projects.push(project);
    // Update scroll state after adding project
    setTimeout(() => this.updateScrollState(), 100);
  }

  // Method to remove a project
  removeProject(id: string) {
    this.projects = this.projects.filter(p => p.id !== id);
    // Update scroll state after removing project
    setTimeout(() => this.updateScrollState(), 100);
  }
}
