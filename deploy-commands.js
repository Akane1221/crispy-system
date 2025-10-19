const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  console.log(`✅ Commande chargée: ${command.data.name}`);
}

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;

if (!token || !clientId) {
  console.error('❌ ERREUR: DISCORD_TOKEN ou DISCORD_CLIENT_ID manquant!');
  console.log('📝 Configure ces variables dans les secrets Replit:');
  console.log('   - DISCORD_TOKEN: Token de ton bot');
  console.log('   - DISCORD_CLIENT_ID: ID de l\'application');
  process.exit(1);
}

const rest = new REST().setToken(token);

(async () => {
  try {
    console.log(`🔄 Déploiement de ${commands.length} commande(s) slash...`);

    const data = await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );

    console.log(`✅ ${data.length} commande(s) déployée(s) avec succès!`);
    console.log('📋 Commandes disponibles:');
    data.forEach(cmd => console.log(`   - /${cmd.name}`));
  } catch (error) {
    console.error('❌ Erreur lors du déploiement:', error);
  }
})();