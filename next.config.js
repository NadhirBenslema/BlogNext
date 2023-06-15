const {PHASE_DEVELOPMENT_SERVER} =require ('next/constants');

module.exports=(phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return{
      env:{
        mongodb_username:'127.0.0.1:27017',
        mongodb_database:'myblog-dev'
      },
    };
  }
  return{
      env:{
        mongodb_username:'127.0.0.1:27017',
        mongodb_database:'myblog'
      },

  };
  
};