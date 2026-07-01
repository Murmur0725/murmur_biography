<template>
  <section id="home" class="hero-section" aria-label="Resume home">
    <div class="axis" aria-hidden="true"></div>

    <div class="hero-content">
      <h1>MURMUR</h1>
      <p class="role">Designer / Architect / Photographer/Curator</p>
      <ResumeTimeline
        :items="timelineItems"
        @item-hover="handleTimelineHover"
        @item-leave="clearTimelineHover"
      />
    </div>

    <ParticlePortrait
      :active-item="activeTimelineItem"
      :active-preview-top="activePreviewTop"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ResumeTimeline from './ResumeTimeline.vue'
import ParticlePortrait from './ParticlePortrait.vue'

const activeTimelineItem = ref(null)
const activePreviewTop = ref(null)

function handleTimelineHover({ item, previewTop }) {
  activeTimelineItem.value = item
  activePreviewTop.value = previewTop
}

function clearTimelineHover() {
  activeTimelineItem.value = null
  activePreviewTop.value = null
}

const timelineItems = [
  {
    date: '2024-2027',
    type: 'Educate',
    title: 'Southern University of Science and Technology (SUSTech)',
    description: 'Master student in Intelligent Manufacturing and Robotics',
    detail:
      'Built a cross-disciplinary foundation in human-computer interaction, experimental design, robotics, kinematic control, and continuum mechanics. Published first-author work at ACM venues, contributed to international exhibitions, and developed research skills across hardware prototyping, qualitative inquiry, and quantitative analysis.',
  },
  {
    date: '26.04-26.06',
    type: 'Intern',
    title: 'Hyper-dynamics Co., Ltd',
    description: 'Embodied AI Product Manager Intern',
    detail:
      'Led product definition for a motion-capture data processing pipeline, covering one-click detection, automated repair, and fine-grained adjustment for timestamp errors, joint limits, self-collision, and ground penetration. Also supported power-industry robotics solution planning and benchmarked data platforms, simulation tools, annotation workflows, and wheel-leg robot ODM options.',
    muted: true,
  },
  {
    date: '25.12-26.03',
    type: 'Intern',
    title: 'Anke Innovation Technology Co., Ltd',
    description: 'Human Factors Engineer Intern',
    detail:
      'Conducted long- and short-duration comfort and stability tests for sleep earphones, combining qualitative observations with quantitative measurements to locate pressure and discomfort areas. Supported ID optimization through 3D scanning, fit interference analysis, finite element workflows, and a computer-vision assisted ear measurement tool for overseas participants.',
    muted: true,
  },
  {
    date: '2019-2024',
    type: 'Educate',
    title: 'South-Central Minzu University (SCMZU)',
    description: 'Bachelor of Architecture, Minor in English',
    detail:
      'Ranked first in the architecture program with a strong academic record, multiple scholarships, and seven university-level honors. Built a foundation in architectural design, spatial research, visual communication, and English-language communication while receiving national and provincial awards in design and computing competitions.',
  },
  {
    date: '26.04-26.07',
    type: 'Intern',
    title: 'United Practice Architects',
    description: 'Architectural Design Intern',
    detail:
      'Supported architectural concept development, design documentation, model refinement, and presentation material production. The work strengthened an end-to-end design workflow from spatial research and schematic exploration to visual communication.',
    muted: true,
  },
  {
    date: '25.12-26.03',
    type: 'Intern',
    title: 'Central South Architectural Design Institute',
    description: 'Architectural Design Intern',
    detail:
      'Contributed to architectural drawing production, project research, design refinement, and presentation materials within a professional institute workflow. The experience connected academic architectural training with practical standards for documentation, coordination, and design delivery.',
    muted: true,
  },
]
</script>
