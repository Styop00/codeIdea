<template>
  <section class="different-section">
    <div class="different-container">
      <div class="circle-section">
        <h2 class="section-title">
          What makes us different
        </h2>
        <div class="circle-wrapper">
          <div
            :class="['circle', 'circle-1', { active: hoveredCard === 3 }]"
            @mouseenter="hoveredCard = 3"
            @mouseleave="hoveredCard = null"
          ></div>
          <div
            :class="['circle', 'circle-2', { active: hoveredCard === 2 }]"
            @mouseenter="hoveredCard = 2"
            @mouseleave="hoveredCard = null"
          ></div>
          <div
            :class="['circle', 'circle-3', { active: hoveredCard === 1 }]"
            @mouseenter="hoveredCard = 1"
            @mouseleave="hoveredCard = null"
          ></div>
          <div class="codeidea">CODEIDEA</div>
        </div>
      </div>

      <div class="cards">
        <div class="card" :class="{ 'active-card': hoveredCard === 1 }"
             @mouseenter="hoveredCard = 1"
             @mouseleave="hoveredCard = null">
          <h3 class="card-title">Specialized Development Partner</h3>
          <ul>
            <li>Deep expertise in sports, booking, and SaaS platforms</li>
            <li>Teams that flex based on your roadmap</li>
            <li>Fill critical gaps without long-term commitments</li>
          </ul>
        </div>

        <div class="card" :class="{ 'active-card': hoveredCard === 2 }"
             @mouseenter="hoveredCard = 2"
             @mouseleave="hoveredCard = null">
          <h3 class="card-title">Structured & Transparent Process</h3>
          <ul>
            <li>Defined phases: discovery, design, development, deployment</li>
            <li>Transparent planning and regular progress updates</li>
            <li>On-time, on-budget delivery you can count on</li>
          </ul>
        </div>

        <div class="card" :class="{ 'active-card': hoveredCard === 3 }"
             @mouseenter="hoveredCard = 3"
             @mouseleave="hoveredCard = null">
          <h3 class="card-title">Forward-Thinking Approach</h3>
          <ul>
            <li>We think beyond the ticket queue</li>
            <li>Product-minded team aligned with your goals</li>
            <li>Always improving, always moving</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue"

const hoveredCard = ref(null)
</script>

<style scoped>
.different-section {
  color: #fff;
  padding: 60px 20px;
  background: #000;
}

.different-section-block {
  background: #000;
}

.different-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
}

@media (min-width: 1024px) {
  .different-container {
    flex-direction: row;
    align-items: center;
  }
}

.circle-section {
  flex: 1;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.circle-wrapper {
  position: relative;
  width: 380px;
  height: 380px;
  margin: 0 auto;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #9c9c9c;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: border 0.4s ease, background 0.4s ease;
}

.circle.active {
  border-color: white;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent);
}

.circle-1 {
  width: 380px;
  height: 380px;
}

.circle-2 {
  width: 300px;
  height: 300px;
}

.circle-3 {
  width: 220px;
  height: 220px;
}

.codeidea {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: #000;
  font-weight: bold;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background-color: #1A1A1A;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  border: 1px solid #2e2e2e;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.card:hover::before {
  opacity: 1;
}

.card-title {
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.card-description {
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.card ul {
  padding-left: 20px;
  margin: 0;
  position: relative;
  z-index: 1;
}

.card li {
  margin-bottom: 6px;
  list-style-type: disc;
  font-size: 0.95rem;
}

.card.active-card {
  border-color: white;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
  transform: scale(1.02);
}
</style>
