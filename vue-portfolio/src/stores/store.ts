import { defineStore } from 'pinia'
import { sendMail, type mailTypes, getUserInfo } from '@/api/myweb.api'

export const useStateContainer = defineStore({
  id: 'stateContainer',
  state: () => ({
  }),

  actions: {
    async sendMail(mail: mailTypes) {
      const result = await sendMail(mail)
        .then((res) => {
          return res.data.message
        })
        .catch((err) => {
          return err
        })
      return result
    },
    async fetchData(){
     const result=await getUserInfo().then(res=>{
      return res.data;
     }).catch(err=>{
      return err
     })
     return result;
    }
  },
  getters: {}
})
