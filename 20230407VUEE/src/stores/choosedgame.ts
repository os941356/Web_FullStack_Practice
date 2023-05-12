import { defineStore } from 'pinia'

export const useGameStore = defineStore("game", {
  state: () => ({
    chooseGameType: null,
    chooseGameRound:null,
  }),
});
export const useBallGameData = defineStore("ReceivedGameData", {
  state: () => ({
    allData: null,
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
   
      nDayRang:null,
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
      date: null,
      time: null
    };
  }
});
