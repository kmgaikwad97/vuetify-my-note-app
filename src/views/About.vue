<template>
  <div class="about pa-6">
    <h1>About {{ $store.state.appTitle }}</h1>
    <p>
      Listify is a comprehensive note-taking application designed to streamline your daily tasks and enhance productivity. Built with Vue.js and Firebase, Listify integrates modern web technologies to offer a robust and user-friendly experience. Here’s what makes Listify stand out:
    </p>
    <ul>
      <li><b>User Authentication:</b> Securely log in and manage your notes with Google authentication. Enjoy a seamless sign-up and login process.</li>
      <li><b>Offline Support:</b> Access your notes even when you’re offline, thanks to our Progressive Web App (PWA) features.</li>
      <li><b>Background Sync:</b> Keep your notes up-to-date with background sync, ensuring your data is always current and synchronized across devices.</li>
      <li><b>Service Worker Integration:</b> Benefit from a reliable and fast user experience with our service worker, which supports offline functionality and improves performance.</li>
      <li><b>Note Management:</b> Effortlessly add, update, and delete notes. Organize your tasks with ease and track your progress over time.</li>
      <li><b>Time Tracking:</b> Add timestamps to your notes for better time management and organization.</li>
      <li><b>Local Storage:</b> Your notes are securely stored locally, offering quick access and reduced load times.</li>
      <li><b>User-Friendly Interface:</b> Navigate through a clean and intuitive interface, designed with your convenience in mind.</li>
    </ul>
    <p>
      Listify is a project developed for learning purposes, incorporating essential features to help you manage your notes effectively. For any inquiries or feedback, feel free to reach out to us at <a href="mailto:kmgaikwad97@gmail.com">kmgaikwad97@gmail.com</a>.
    </p>
    <p>Thank you for using Listify!</p>
  </div>
</template>

<script>
export default {
  // You can add any additional script or data properties here if needed
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.about ul {
  list-style-type: disc;
  padding-left: 2rem;
}

.about li {
  margin-bottom: 0.5rem;
}

.about a {
  color: #1976d2;
  text-decoration: none;
}

.about a:hover {
  text-decoration: underline;
}
</style>
