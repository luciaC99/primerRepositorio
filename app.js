let autosImportados =
require('./autos');
  const concesionaria = {
     autos: autosImportados, buscarAuto:
     function(pat) {
        for (let 
        i=0;i<this.autos.length;i++);
        {
           if (this.autos[i].patente==pat);
           {
              return this.autos[i];
           }
         }
         return null;
      }
  };