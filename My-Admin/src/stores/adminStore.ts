import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore({
    id:'Theme',
    state:()=>({
        isDark:false,
        showModal:false,
        isMouseLeaveModal:false
    }),
   
})
