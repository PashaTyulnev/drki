<template>
  <section class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
      style="background-image: radial-gradient(circle, #00000014 1px, transparent 1px); background-size: 28px 28px;"
    />

    <div class="mx-auto max-w-6xl px-6 pt-14 pb-16 sm:pt-20">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 class="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Kultur verbindet.
            <span class="block font-light italic text-ink/80">Seit über 30 Jahren.</span>
          </h1>

          <p class="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/70">
            Das Deutsch-Russische Kulturinstitut in Dresden steht vor seiner größten
            Herausforderung. Ohne Ihre Unterstützung müssen wir schließen.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#spenden"
              class="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-label text-xs uppercase tracking-wide text-white transition hover:bg-navy-dark"
            >
              Jetzt spenden
            </a>
            <a href="#was-wir-tun" class="font-label text-xs uppercase tracking-wide text-ink/60 underline decoration-ink/20 underline-offset-4 hover:text-ink">
              Was wir tun →
            </a>
          </div>
        </div>

        <div class="relative aspect-[4/3] max-h-[420px] overflow-hidden rounded-3xl">
          <img
            src="/images/dresden-skyline.jpg"
            alt="Dresden Skyline mit Frauenkirche und Elbe"
            class="absolute inset-0 h-full w-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

          <div class="pointer-events-none absolute inset-0 flex flex-col justify-between p-8">
            <p class="font-label text-[11px] uppercase tracking-[0.2em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
              Dresden · Gegründet 1993
            </p>
            <blockquote class="font-display text-3xl italic font-light leading-snug text-white sm:text-4xl [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              "Dialog durch Kultur"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
