import { defineStore } from 'pinia'
import { computed } from 'vue';

export const useGameStore = defineStore("game", {
  state: () => ({
    chooseGameType: null,
    chooseGameRound:null,
  }),
});
export const useBallGameData = defineStore("ReceivedGameData",  {
  state: () => ({
    allData: [],
    aData: null,
    aOdds: null,
  }),
});
export const useBallGameInfoTable = defineStore("ballGameInfoTable", {
  state: () => ({
    aOdds: null,
  }),
});

export const useClickMoreInfo = defineStore("ClickMoreInfo", {
  state: () => ({
    isMoreOpen : false,
  }),
});

export const usePostData = defineStore("PostData", {
  state() {
    return {
   
      nDayRang:1,

      nSid:null,

    
    };
  }
});




export const useClickBetInfo = defineStore("ClickBetInfo", {
  state() {
    return {
      league:null,
      team1: null,
      team2: null,
      clickedTeam:null,
      date: null,
      time: null
    };
  }
});
