import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useDataStore = defineStore('data', () => {
  let visible = ref(false);
  let visible_content = ref(true);

  return {visible, visible_content};
})
