'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#082f49]" />

        {/* EFEITOS */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* TEXTO */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-semibold text-lg mb-6"
            >
              Backend Developer • Python • Java
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-black leading-tight mb-8"
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
              className="text-gray-300 text-xl leading-9 max-w-2xl"
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
              className="flex flex-wrap gap-5 mt-12"
            >
              <a
                href="https://github.com/pedromagina2"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold transition hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pedromagina/"
                target="_blank"
                className="border border-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition hover:scale-105"
              >
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pedromaginaf@outlook.com"
                target="_blank"
                className="bg-white/10 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition hover:scale-105"
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
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <img
                    src="/unifei.png"
                    className="w-20 h-20 object-contain bg-white rounded-2xl p-2"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      UNIFEI
                    </h3>

                    <p className="text-gray-400">
                      Engenharia de Controle e Automação
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <img
                    src="/unitau.png"
                    className="w-20 h-20 object-contain bg-white rounded-2xl p-2"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      UNITAU EAD
                    </h3>

                    <p className="text-gray-400">
                      Análise e Desenvolvimento de Sistemas
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="text-gray-400 mb-6">
                    Experiência Profissional
                  </p>

                  <div className="flex gap-4">
                    <img
                      src="/vw.png"
                      className="w-16 h-16 object-contain bg-white rounded-2xl p-2"
                    />

                    <img
                      src="/maxion.png"
                      className="w-16 h-16 object-contain bg-white rounded-2xl p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section className="py-28 px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Sobre Mim
            </h2>

            <p className="text-gray-300 text-lg leading-9">
              Sou estudante universitário focado na área de tecnologia,
              desenvolvimento backend e criação de sistemas.
              Tenho maior desenvoltura em Python e Java,
              buscando constantemente evoluir minhas habilidades técnicas,
              desenvolver projetos modernos e adquirir experiência profissional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="py-28 px-6 md:px-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-20"
          >
            Trajetória Profissional
          </motion.h2>

          <div className="space-y-10">
            {/* PROCESSOS */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex gap-4">
                  <img
                    src="/vw.png"
                    className="w-20 h-20 bg-white rounded-2xl p-3"
                  />

                  <img
                    src="/maxion.png"
                    className="w-20 h-20 bg-white rounded-2xl p-3"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    Estagiário em Engenharia de Processos
                  </h3>

                  <p className="text-cyan-400 text-lg mb-4">
                    Maxion — Módulo Volkswagen Resende
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
              className="bg-[#111827] border border-cyan-500/20 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex gap-4">
                  <img
                    src="/vw.png"
                    className="w-20 h-20 bg-white rounded-2xl p-3"
                  />

                  <img
                    src="/maxion.png"
                    className="w-20 h-20 bg-white rounded-2xl p-3"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    Estagiário em Engenharia de Qualidade
                  </h3>

                  <p className="text-cyan-400 text-lg mb-4">
                    Maxion — Módulo Volkswagen Resende
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
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-20"
          >
            Tecnologias
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-3xl p-10 backdrop-blur-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                className="w-24 mx-auto mb-8"
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
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-10 backdrop-blur-xl"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                className="w-24 mx-auto mb-8"
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
    </main>
  )
}