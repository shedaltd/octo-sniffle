# octo-sniffle
Sound board synthesiser built in React Native


### Update React-Native & Watchman

Ensure you are running the newest version of Watchman and react-native.

Update Watchman:

	watchman shutdown-server
	brew update
	brew reinstall watchman


Update React-Native:

	sudo npm update -g react-native-cli



The **Octo-Sniffle** Project is currently running react-native v0.13.0-rc and requires
node version > 4, use [nvm](https://github.com/creationix/nvm) to download and install Node version 4

### Running the Project

Clone the repo down to your harddrive and then update your npm dependancies

	git clone <repo url> octo-sniffle
	cd octo-sniffle/src
	npm install

Then run the XCode project and start the app (while still inside the /src folder)

	open octosniffle.xcodeproj/

This will open the project in XCode. You can then press ⌘ + R to run the project
