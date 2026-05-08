'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Bot Discord',
    description:
      'Sistema de automação e gerenciamento para servidores Discord.',
    tech: 'Python',
    github: 'https://github.com/pedromagina2',
  },
  {
    title: 'Sistema Web',
    description:
      'Aplicação moderna focada em backend e integração de sistemas.',
    tech: 'Java',
    github: 'https://github.com/pedromagina2',
  },
  {
    title: 'Portfólio Profissional',
    description:
      'Portfólio moderno desenvolvido com Next.js e Tailwind.',
    tech: 'Next.js',
    github: 'https://github.com/pedromagina2',
  },
]

export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-xl font-black">
      Pedro<span className="text-cyan-400">.</span>
    </h1>

    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#sobre" className="hover:text-cyan-400 transition">
        Sobre
      </a>

      <a href="#experiencia" className="hover:text-cyan-400 transition">
        Experiência
      </a>

      <a href="#projetos" className="hover:text-cyan-400 transition">
        Projetos
      </a>

      <a href="#tecnologias" className="hover:text-cyan-400 transition">
        Tecnologias
      </a>
    </nav>
  </div>
</header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]" />

        {/* EFEITOS */}
        <div className="absolute top-10 left-0 w-56 h-56 md:w-72 md:h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center"
        >
          {/* TEXTO */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-semibold text-sm md:text-lg mb-5"
            >
              Backend Developer • Python • Java
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight mb-6"
            >
              Pedro
              <span className="block text-cyan-400">
                Magina
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-base md:text-xl leading-8 max-w-2xl mx-auto lg:mx-0"
            >
              Estudante de Engenharia de Controle e Automação na UNIFEI
              e Análise e Desenvolvimento de Sistemas pela UNITAU EAD,
              focado em desenvolvimento backend, tecnologia e criação
              de soluções modernas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/pedromagina2"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-7 py-4 rounded-2xl font-bold transition hover:scale-105 shadow-2xl shadow-cyan-500/30 text-center"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pedromagina/"
                target="_blank"
                className="border border-cyan-400 px-7 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition hover:scale-105 text-center"
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pedromaginaf@outlook.com"
                target="_blank"
                className="bg-white/10 backdrop-blur-xl border border-white/10 px-7 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition hover:scale-105 text-center"
              >
                Email
              </a>
            </motion.div>
          </div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative max-w-xl mx-auto w-full"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-2xl">
              <div className="space-y-7">
                {/* UNIFEI */}
                <div className="flex items-center gap-4">
                  <img
                    src="/unifei.png"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-2xl p-2"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      UNIFEI
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base">
                      Engenharia de Controle e Automação
                    </p>
                  </div>
                </div>

                {/* UNITAU */}
                <div className="flex items-center gap-4">
                  <img
                    src="/unitau.png"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-2xl p-2"
                  />

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      UNITAU EAD
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base">
                      Análise e Desenvolvimento de Sistemas
                    </p>
                  </div>
                </div>

                {/* EXPERIÊNCIA */}
                <div className="border-t border-white/10 pt-6">
                  <p className="text-gray-400 mb-5 text-sm md:text-base">
                    Experiência Profissional
                  </p>

                  <div className="flex gap-4">
                    <img
                      src="/vw.png"
                      className="w-14 h-14 md:w-16 md:h-16 object-contain bg-white rounded-2xl p-2"
                    />

                    <img
                      src="/maxion.png"
                      className="w-14 h-14 md:w-16 md:h-16 object-contain bg-white rounded-2xl p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0f172a] border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Sobre Mim
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-9">
              Sou estudante universitário focado na área de tecnologia,
              desenvolvimento backend e criação de sistemas.
              Tenho maior desenvoltura em Python e Java,
              buscando constantemente evoluir minhas habilidades técnicas,
              desenvolver projetos modernos e adquirir experiência profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="py-24 px-6 md:px-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Trajetória Profissional
          </motion.h2>

          <div className="space-y-10">
            {/* PROCESSOS */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex gap-4">
                  <img
                    src="/vw.png"
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-3"
                  />

                  <img
                    src="/maxion.png"
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-3"
                  />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Estagiário em Engenharia de Processos
                  </h3>

                  <p className="text-cyan-400 text-lg mb-4">
                    Módulo Maxion — Volkswagen Resende
                  </p>

                  <p className="text-gray-400 mb-4">
                    Janeiro 2025 — Fevereiro 2025
                  </p>

                  <p className="text-gray-300 leading-8 text-lg">
                    Atuação no setor de engenharia de processos,
                    acompanhando melhorias operacionais,
                    suporte em processos industriais e análise de produção.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* QUALIDADE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex gap-4">
                  <img
                    src="/vw.png"
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-3"
                  />

                  <img
                    src="/maxion.png"
                    className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl p-3"
                  />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Estagiário me Engenharia de Qualidade
                  </h3>

                  <p className="text-cyan-400 text-lg mb-4">
                    Módulo Maxion — Volkswagen Resende
                  </p>

                  <p className="text-gray-400 mb-4">
                    Fevereiro 2025 — Março 2025
                  </p>

                  <p className="text-gray-300 leading-8 text-lg">
                    Participação em processos relacionados à qualidade,
                    acompanhamento de indicadores e suporte nas análises
                    de controle e melhoria contínua.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            Tecnologias
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                className="w-20 md:w-24 mx-auto mb-8"
              />

              <h3 className="text-3xl font-bold mb-6">
                Python
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                Desenvolvimento backend, automações,
                APIs, lógica de programação e criação de sistemas.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                className="w-20 md:w-24 mx-auto mb-8"
              />

              <h3 className="text-3xl font-bold mb-6">
                Java
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                Programação orientada a objetos,
                aplicações e estruturação de sistemas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* PROJETOS */}
<section
  id="projetos"
  className="py-24 px-6 md:px-20 bg-[#020617]"
>
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-center mb-16"
    >
      Projetos
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
            <span className="text-2xl">🚀</span>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            {project.title}
          </h3>

          <p className="text-gray-400 leading-8 mb-6">
            {project.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-cyan-400 font-semibold">
              {project.tech}
            </span>

            <a
              href={project.github}
              target="_blank"
              className="text-sm border border-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* CURRÍCULO */}
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold mb-8"
    >
      Currículo
    </motion.h2>

    <p className="text-gray-400 text-lg leading-8 mb-10">
      Baixe meu currículo profissional em PDF.
    </p>

    <a
      href="/curriculo.pdf"
      target="_blank"
      className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold transition hover:scale-105 inline-block"
    >
      Download CV
    </a>
  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-10 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="text-2xl font-black">
        Pedro<span className="text-cyan-400">.</span>
      </h3>

      <p className="text-gray-400 mt-2">
        Backend Developer • Python • Java
      </p>
    </div>

    <div className="flex items-center gap-5">
      <a
        href="https://github.com/pedromagina2"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/pedromagina/"
        target="_blank"
        className="hover:text-cyan-400 transition"
      >
        LinkedIn
      </a>

      <a
        href="mailto:pedromaginaf@outlook.com"
        className="hover:text-cyan-400 transition"
      >
        Email
      </a>
    </div>
  </div>
</footer>
    </main>
  )
}