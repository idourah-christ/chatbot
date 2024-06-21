import { ChatApp } from './components/ChatApp.js';
import { Paylaod } from './core/bots/Bot.js';



// Define your bots here
const botData: Paylaod[] = [{
  name:"Zulu",
  avatar:"",
  actions:[
    {
      command:"help",
      description:"List available commands",
      execute:async ():Promise<string> => {
        return `Commands:
        - help 
        - origin
        `
      }
    },
    {
      command:"origin",
      description:"List available commands",
      execute:async ():Promise<string> => {
        return `Les Zoulous, « peuple du ciel » sont des populations Bantoues arrivées dans le sud du continent vers l'an 500 à partir de l'Afrique de l'Est. Ils font partie du groupe Nguni, qui comprend aussi les Ndebele, les Xhosa et les Swazi.`
      }
    },
    {
      command:"more",
      description:"",
      execute:async (params):Promise<string> => {
        const url = `https://words-definitions-dictionary-and-data-api.p.rapidapi.com/en/${params}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '482be495ccmsha4455e8b1f910eep181ae2jsn7e4da70cf01a',
            'x-rapidapi-host': 'words-definitions-dictionary-and-data-api.p.rapidapi.com'
          }
        };

          try {
            const response = await fetch(url, options);
            const result = await response.text();
            return result;
  
          } catch (error) {
             return "Not information found"
          }
      }
    }
  ]
},{
  name:"Bantu",
  avatar:"",
  actions:[{
    command:"help",
    description:"Tells you",
    execute:async ():Promise<string> => {
      return `Commands:
      - help 
      - origin
      `
    }
  }, 
  {
    command:"origin",
    description:"List available commands",
    execute:async ():Promise<string> => {
      return `On nomme « Ban-tu » (« bantu » signifie « humains » en kikongo) les locuteurs des langues bantoues (environ quatre cent cinquante langues) sur le continent africain. Ils sont répartis du Cameroun aux Comores et du Soudan à l’Afrique du Sud..`
    }
  },{
    command:"api-geo",
    description:"",
    execute:async (params):Promise<string> => {
      const url = `https://ipg-ip-geolocation.p.rapidapi.com/v1?ip_address=${params}`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '482be495ccmsha4455e8b1f910eep181ae2jsn7e4da70cf01a',
            'x-rapidapi-host': 'ipg-ip-geolocation.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.text();
          return result;

        } catch (error) {
           return "Not information found"
        }
    }
  }]
},
{
  name:"Ashanti",
  avatar:"",
  actions:[
    {
      command:"help",
      description:"List available commands",
      execute:async ():Promise<string> => {
        return `Commands:
        - help 
        - origin
        `
      }
    },
    {
      command:"origin",
      description:"List available commands",
      execute:async ():Promise<string> => {
        return `Les Ashantis sont une population d'Afrique de l'Ouest vivant au Ghana. Ils font partie du grand groupe des Akans et se subdivisent eux-mêmes en de nombreux sous-groupes. Ils parlent le twi qui est une des langues akan1 appartenant au groupe des langues kwa.`
      }
    }
  ]
}]

document.addEventListener('DOMContentLoaded', () => {
  const app = ChatApp(botData);
  document.getElementById('app')!.appendChild(app);
});