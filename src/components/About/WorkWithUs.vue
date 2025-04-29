<template>
  <section class="work-section">
    <h2 class="section-title">What it's like to work with us</h2>
    <div class="grid-container">
      <div v-for="(item, index) in values" :key="index" class="card">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: 'Collaborative',
    description:
      'We treat every project as a partnership. From day one, we align with your vision, listen to your challenges, and co-create solutions that deliver real value. Our team becomes part of yours—your goals are our goals.'
  },
  {
    title: 'Solution-Oriented',
    description:
      'We\'re not just here to write code—we\'re here to solve business problems. From streamlining bookings to building scalable SaaS, we take an active role in shaping the most effective, modern solutions for your organization..'
  },
  {
    title: 'Transparent',
    description:
      'Honest communication is key to how we work. We keep you involved at every step—no vague timelines or technical black boxes. You\'ll always know where things stand and what\'s coming next.'
  },
  {
    title: 'Impact-Driven',
    description:
      'We measure success by the growth and results you achieve. Whether it\'s through more efficient staff management, increased court bookings, or stronger user engagement, we\'re focused on building platforms that move your business forward—now and into the future.'
  }
];

</script>

<style scoped>
.work-section {
  padding: 4rem 2rem;
  text-align: center;
  color: #ffffff;
}

.section-title {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: rgb(40 41 41 / var(--tw-text-opacity, 1))
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
}

.card {
  background: black;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid transparent;
  text-align: left;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: white;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.15);
  transform: scale(1.02);
}

.card-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
