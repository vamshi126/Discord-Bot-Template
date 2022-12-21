import dotenv from "dotenv"
import {glob} from'glob'
import {promisify}from "util"
import path from 'node:path'
import DiscordJS, { Collection, GatewayIntentBits } from 'discord.js'
dotenv.config()


export const client =new DiscordJS.Client({
    intents:[
      
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,

    ]
})

dotenv.config()
client.login(process.env.TOKEN)





client.on('ready',()=>{
    console.log("hey there! I'm on duty..")
    client.user?.setStatus('idle')
    client.user?.setPresence(
    {activities:
    [
        {name:'with words!'}
    ]
    }) 
  
}),














const globPromise=promisify(glob)
export interface Client{
    commands:Collection<string,any>=new Collection();
}
   
async importFile(filePath:string){
return(await import(filePath)).default
}


    const commandsPath=path.join(__dirname,'./src/commands')
    console.log(commandsPath)
     const commandFiles=await globPromise(`${__dirname}/./commands/*{.ts,.js}`);
    
      commandFiles.forEach(async(file)=>{
       const filePath=path.join(commandsPath,file)
       const command=require(filePath)
       if('data' in command && 'execute' in command){
        client.commands.set(command.data.name,command)
       }  else{
        console.log(`[warning] file at ${filePath} is missing fields`)

       }
       console.log(client.commands)
       
 
     
      console.log(commandFiles)
     /* commandFiles.forEach(async(filePath)=>{
       let command:CommandType=await this.importFile(filePath)
        if(!command.name)return;
        this.commands.set(command.name,command)
        slashCommands.push(command)
    })
    */
      
      }

 



    }
