<script setup>
import {onMounted} from 'vue';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from "vanilla-cookieconsent";
import config from './cookieconsent-config';

onMounted(() => {
  CookieConsent.run(config);
});
</script>
