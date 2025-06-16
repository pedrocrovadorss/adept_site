document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#0077b6"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0077b6",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__item a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Animated counter for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(counter);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Initialize counter animation when stats section is in view
    const statsSection = document.querySelector('.sobre');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);

    // Flowchart button functionality
    const contents = {
        'analise-dados': `
            <h3>Análise de Dados</h3>
            <p>Nosso processo de análise de dados é composto por várias etapas integradas:</p>
            <ul>
                <li><strong>Coleta de Dados:</strong> Aplicação de formulários de satisfação, integração com sistemas existentes e realização de entrevistas com o público e comerciantes.</li>
                <li><strong>Visualização:</strong> Geração de dashboards interativos que permitem a análise por filtros como faixa etária, dias da semana, clima, entre outros.</li>
                <li><strong>Estudos Estratégicos:</strong> Identificação de padrões de consumo, definição de público-alvo e análise de produtos carro-chefe sob diferentes contextos.</li>
            </ul>
            <p>Essa abordagem orientada por dados possibilita decisões mais assertivas e estratégias de marketing mais eficazes.</p>
        `,
        'perfil-conversoes': `
            <h3>Elaboração do Perfil de Conversões</h3>
            <p>Com base na análise de dados, realizamos um estudo aprofundado dos modelos de vendas vigentes, aplicando métricas específicas para:</p>
            <ul>
                <li>Identificar gargalos e oportunidades de melhoria.</li>
                <li>Reconhecer padrões de conversão por canal, produto ou perfil de cliente.</li>
                <li>Aprimorar estratégias de vendas e aumentar a taxa de conversão.</li>
            </ul>
        `,
        'publico-alvo': `
            <h3>Identificação do Público-Alvo</h3>
            <p>Através de entrevistas com os comerciantes e análise dos dados de vendas, verificamos se as estratégias anteriores estão atingindo o público desejado. Com essas informações, ajustamos as abordagens para:</p>
            <ul>
                <li>Alinhar a comunicação e o posicionamento da marca.</li>
                <li>Aumentar a efetividade das campanhas de marketing.</li>
                <li>Maximizar o retorno sobre o investimento em publicidade.</li>
            </ul>
        `,
        'posicionamento-visual': `
            <h3>Posicionamento Visual</h3>
            <p>Desenvolvemos um design abrangente que reflete a identidade da marca e ressoa com o público-alvo. Isso inclui:</p>
            <ul>
                <li>Criação de logotipos e paletas de cores.</li>
                <li>Desenvolvimento de materiais promocionais e embalagens.</li>
                <li>Design de interfaces para websites e aplicativos.</li>
            </ul>
            <p>Nosso objetivo é transmitir e reforçar os valores da marca, criando uma presença visual consistente e impactante.</p>
        `,
        'ferramentas-conversao': `
            <h3>Gestão das Ferramentas de Conversão</h3>
            <p>Implementamos e gerenciamos ferramentas digitais que potencializam as vendas online, incluindo:</p>
            <ul>
                <li>Desenvolvimento de websites otimizados para conversão.</li>
                <li>Criação de chatbots e aplicativos personalizados.</li>
                <li>Gestão de SEO e presença em marketplaces como iFood, Rappi, Mercado Livre e Amazon.</li>
            </ul>
            <p>Essas soluções são adaptadas às necessidades específicas de cada negócio, visando maximizar a eficiência e os resultados.</p>
        `,
        'estrategias-marketing': `
            <h3>Elaboração de Estratégias de Marketing</h3>
            <p>Desenvolvemos estratégias de marketing digital baseadas em dados, focadas em:</p>
            <ul>
                <li>Criação de conteúdo relevante e atraente para o público-alvo.</li>
                <li>Planejamento e execução de campanhas em diferentes canais, como redes sociais, e-mail marketing e publicidade paga.</li>
                <li>Análise contínua dos resultados para otimização das ações.</li>
            </ul>
            <p>O objetivo é atrair novos clientes e fortalecer a presença da marca no mercado.</p>
        `,
        'elaboracao-campanhas': `
            <h3>Elaboração de Campanhas</h3>
            <p>Desenvolvemos campanhas interativas e inovadoras para fidelizar os clientes adquiridos por meio de tráfego pago ou orgânico. Utilizamos recursos estratégicos para:</p>
            <ul>
                <li>Estimular o engajamento e a participação ativa dos clientes.</li>
                <li>Incentivar o compartilhamento e as indicações, gerando tráfego orgânico adicional.</li>
                <li>Fortalecer o relacionamento entre a marca e o consumidor.</li>
            </ul>
        `,
        'analise-desempenho': `
            <h3>Análise de Desempenho</h3>
            <p>Realizamos análises periódicas dos dados coletados para avaliar o impacto das estratégias implementadas. Isso inclui:</p>
            <ul>
                <li>Monitoramento de indicadores-chave de desempenho (KPIs).</li>
                <li>Avaliação do retorno sobre investimento (ROI) das campanhas.</li>
                <li>Identificação de áreas de sucesso e oportunidades de melhoria.</li>
            </ul>
        `,
        'adaptacao': `
            <h3>Adaptação</h3>
            <p>Com base na análise de desempenho, ajustamos e aprimoramos continuamente as estratégias para garantir resultados sustentáveis e alinhados aos objetivos do negócio. Essa abordagem ágil permite:</p>
            <ul>
                <li>Responder rapidamente às mudanças do mercado.</li>
                <li>Aproveitar novas oportunidades de crescimento.</li>
                <li>Manter a competitividade e a relevância da marca.</li>
            </ul>
        `
    };

    const buttons = document.querySelectorAll('.flowchart-button');
    const contentElement = document.getElementById('description-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const contentKey = button.getAttribute('data-content');
            contentElement.innerHTML = contents[contentKey];
            
            // Animate content change
            gsap.from(contentElement.children, {
                duration: 0.5,
                y: 20,
                opacity: 0,
                stagger: 0.1,
                ease: "power2.out"
            });
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero elements
    gsap.from('.hero__title, .hero__text, .hero__buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from('.hero__image', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
    });

    // Animate section titles
    gsap.utils.toArray('.section__title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });

    // Animate cards
    gsap.utils.toArray('.diferencial__card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Animate planos
    gsap.utils.toArray('.plano').forEach((plano, i) => {
        gsap.from(plano, {
            scrollTrigger: {
                trigger: plano,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 100,
            opacity: 0,
            delay: i * 0.15,
            ease: "back.out(1.7)"
        });
    });

    // Animate flowchart
    gsap.from('.flowchart-button', {
        scrollTrigger: {
            trigger: '.container__fluxograma',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.5,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
    });

    gsap.from('.description', {
        scrollTrigger: {
            trigger: '.container__fluxograma',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power3.out"
    });

    // Animate contact form
    gsap.from('.contato__form', {
        scrollTrigger: {
            trigger: '.contato',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "back.out(1.7)"
    });

    // Animate contact info cards
    gsap.utils.toArray('.info__card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.contato',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.6,
            y: 50,
            opacity: 0,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});