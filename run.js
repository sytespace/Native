var electronInstaller = require('electron-winstaller');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './sytespace-native-win32-x64',
    // Specify the existing folder where 
    outputDirectory: './sytespace-native-installers',
    // The name of the Author of the app (the name of your company)
    authors: 'Mauro M.',
    // The name of the executable of your built
    exe: './sytespace-native.exe',
    // Icon
    iconUrl: './sytespace.ico',
    // Name for installer (exe)
    setupExe: 'sytespace_installer.exe',
    // Force no exe
    noMsi: true,
    // Cert
    certificateFile: 'certs/mauromartins@email.com.pfx',
    // Cert PW - Changed to sytespace for github
    certificatePassword: 'sytespace',
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});