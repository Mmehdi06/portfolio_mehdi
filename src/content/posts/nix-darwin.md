---
title:  From HomeBrew to Nix-Darwin.
tags: ["Nix", "Homebrew", "Package Manager","MacOS"]
cover: ../../assets/post-images/nix-darwin/cover.png
description: Why I Switched from Homebrew to Nix-Darwin
publishedAt: 2024-11-08
---


## Introduction

For years, Homebrew has been the go-to package manager for macOS users, renowned for its simplicity and extensive package library. However, after discovering Nix-Darwin, a system configuration tool for macOS based on the Nix package manager, I found a more powerful and flexible solution. While Nix-Darwin has a steeper learning curve, the benefits of declarative configuration, reproducibility, and seamless dotfile management made the switch worthwhile for me.

In this article, I’ll break down why I switched from Homebrew to Nix-Darwin, share the advantages I’ve found, the challenges I’ve encountered, and provide a guide to replicating a similar configuration.

---

## Why Switch from Homebrew to Nix-Darwin?

Homebrew is popular for its ease of use and broad package support, but for users who want full control over their environment, it has limitations. Here’s why I chose Nix-Darwin over Homebrew:

1. **Declarative Configuration**

    With Nix-Darwin, I define my entire environment in a `flake.nix` file, specifying exactly which packages, settings, and applications I want on my system. Changes to this file are applied consistently and reproducibly across my machine. This approach has allowed me to say goodbye once and for all to the bad habit of installing Homebrew formulas and their dependencies, which I often used once and then forgot to uninstall.

2. **Reproducibility**

    Version-controlling my configuration file in Git, enables me to track changes over time, roll back to previous versions, and easily replicate my setup on new machines. This level of control and security is invaluable, especially if you experiment frequently or use multiple devices. I currently have my [dotfiles](https://github.com/Mmehdi06/dotfiles) as well as my [Nix configuration](https://github.com/Mmehdi06/nix-darwin) in two separate repositories, and this setup works very well for me.

3. **Atomic Updates and Rollbacks**

    Updates in Nix are atomic. Either the update is fully successful, or the system remains in its previous state, which prevents partial installs that might leave the system in a broken state. Additionally, if I run into issues, I can roll back to the last working configuration with minimal hassle.

4. **System-Wide and User-Specific Configuration**

    Nix-Darwin, when combined with Home Manager, offers a clean separation of system-wide packages and user-specific configurations. This structure allows me to set up a personalized environment while ensuring system settings are kept isolated and modular.

5. **Homebrew Integration**

    While Nix’s package library is extensive, it can lag behind Homebrew for niche applications or apps that require timely updates. Fortunately, Nix-Darwin offers an integration with Homebrew, letting me install packages from both Nix and Homebrew, depending on which best meets my needs.

---

## Why Nix-Darwin Isn’t for Everyone

Despite Nix-Darwin’s strengths, it isn’t a solution for every macOS user. Here’s why:

- **Steep Learning Curve**

    Nix-Darwin requires a good grasp of Nix’s syntax and structure, which isn’t as user-friendly as Homebrew’s straightforward approach. Configuring everything and troubleshooting can take time, and certain packages may not work seamlessly with macOS tools or might need to be installed via Homebrew instead.

- **Dotfile Management**

    Managing dotfiles within Nix-Darwin can be complex. I prefer to use symlinks directly to my dotfiles repository, as this approach lets me retain full ownership over the files. This setup has allowed me to integrate my preferred setup with tools like LazyVim within tmux, but it does require some additional manual configuration.

---

## Nix Darwin Installation using flakes

Here's how you can set up a similar Nix-Darwin environment, using the steps I followed and a basic `flakes.nix` configuration.

### Step 1: Generate a Basic `flake.nix` File

If you don't already have a Nix configuration, you can create one with the following commands:

```bash
mkdir -p ~/.config/nix
cd ~/.config/nix
nix flake init -t nix-darwin
sed -i '' "s/simple/$(scutil --get LocalHostName)/" flake.nix
```
> **Note**: If you're on Apple Silicon, change `nixpkgs.hostPlatform` to `aarch64-darwin` in your `flake.nix` file to ensure compatibility.

### Step 2: Install Nix-Darwin

Instead of using the `darwin-installer`, run the following command to install Nix-Darwin with `darwin-rebuild`:

```bash
nix run nix-darwin -- switch --flake ~/.config/nix
```
Since `darwin-rebuild` won't be in your PATH initially, this command will execute it directly from Nix.

### Step 3: Apply Nix-Darwin Configurations

After installation, you can apply changes to your system by running:

```bash
darwin-rebuild switch --flake ~/.config/nix
```
Each time you make updates to your configuration file, this command will apply them, ensuring that your system reflects the latest changes.

> **For More Information**: Consult the [official Nix-Darwin GitHub repository](https://github.com/LnL7/nix-darwin?tab=readme-ov-file#flakes) for detailed documentation and advanced usage tips.

## My Nix-Darwin Configuration: Breaking It Down

Now, let’s dive into my configuration and the choices I made, including system packages, Homebrew integration, and other settings that create a cohesive environment.

### 1. Declarative System Packages

In my `flakes.nix` configuration, I use Nix-Darwin to install essential command-line tools and utilities that I frequently rely on. Here’s a look at the `environment.systemPackages` section of my configuration:

```nix
environment.systemPackages = [
  pkgs.git
  pkgs.gh
  pkgs.fd
  pkgs.mkalias
  pkgs.ripgrep
  pkgs.bat
  pkgs.fzf
  pkgs.zoxide
  pkgs.lazygit
  pkgs.eza
  pkgs.starship
];
```

Each of these tools serves a purpose in my workflow:
- **git & gh**: Essential for version control and GitHub integration.
- **fd & ripgrep**: For fast file searching, much quicker than the default `find` and `grep` commands.
- **bat**: A better `cat` with syntax highlighting.
- **fzf & zoxide**: Command-line navigation tools for faster workflow.
- **starship**: A customizable shell prompt that shows useful system information at a glance.

This selection of packages covers core needs, enhancing my command-line experience and productivity.

### 2. Homebrew Integration

Nix-Darwin’s native Homebrew support allows me to use certain packages that are more reliable or better supported on Homebrew than Nix, especially for macOS-specific tools or applications not available in Nixpkgs.
```nix

homebrew = {
  enable = true;

  brews = [
    "neovim"
    "tmux"
    "zsh-syntax-highlighting"
    "zsh-autosuggestions"
    "mas"
  ];

  casks = [
    "the-unarchiver"
    "1password"
    "orbstack"
    "wezterm"
    "arc"
    "raycast"
  ];

};

```

This configuration allows me to use **neovim** and **tmux** from Homebrew, as the Nix versions occasionally face issues. Wezterm had for example also a rendering issue known by the community. Additionally, tools like **mas** (Mac App Store CLI) enable automated installation and updates for App Store applications, saving time.

### 3. Keyboard and System Customizations

A big part of my transition to Nix-Darwin was the ability to set system-wide preferences declaratively. Here’s how I’ve customized keyboard and system behavior:

```nix

system.keyboard.enableKeyMapping = true;

system.keyboard.remapCapsLockToControl = true;
```
By remapping the Caps Lock key to Control, I streamline my workflow, making frequent commands easier to execute in my development environment. This is particularly helpful because I use `Ctrl-hjkl` to navigate between panes in Neovim and tmux with the tmux-navigator plugin.

Additionally, my `system.defaults` section controls macOS preferences, such as dock behavior and Finder settings:

```nix

system.defaults = {
  dock.autohide = true;
  dock.autohide-time-modifier = 0.0;
  dock.autohide-delay = 0.0;

  finder.FXPreferredViewStyle = "clmv";

  NSGlobalDomain.AppleInterfaceStyle = "Dark";
  NSGlobalDomain.KeyRepeat = 2;
};

```

These settings make my macOS experience faster and more comfortable by reducing visual distractions and enabling dark mode by default.

### 4. Font and Application Aliasing

Another unique feature of my Nix-Darwin setup is managing fonts and application aliases declaratively:

```nix

fonts.packages = [
  (pkgs.nerdfonts.override { fonts = [ "JetBrainsMono" ]; })
];

```

The `JetBrainsMono` font is ideal for coding, and managing it via Nix-Darwin means I don’t have to reinstall it manually across systems. I also create aliases for applications I use frequently:

```applescript

system.activationScripts.applications.text = let
  env = pkgs.buildEnv {
    name = "system-applications";
    paths = config.environment.systemPackages;
    pathsToLink = "/Applications";
  };
in
  pkgs.lib.mkForce ''
    # Set up applications.
    echo "setting up /Applications..." >&2
    rm -rf /Applications/Nix\ Apps
    mkdir -p /Applications/Nix\ Apps
    find ${env}/Applications -maxdepth 1 -type l -exec readlink '{}' + |
    while read src; do
      app_name=$(basename "$src")
      echo "copying $src" >&2
      ${pkgs.mkalias}/bin/mkalias "$src" "/Applications/Nix Apps/$app_name"
    done
  '';

```

This script helps organize my applications in `/Applications/Nix Apps`, keeping my system directory tidy and organized. Additionally, by creating an alias, these applications become visible in Spotlight search, which they wouldn't be otherwise.

### 5. Managing Dotfiles with Home Manager and Symlinks

Managing dotfiles in Nix-Darwin and Home Manager can be a bit tricky, so I use a hybrid approach by symlinking configurations directly from my dotfiles repository. Here’s how this looks in `flakes.nix`:

```nix
home.file = {

  "/Users/mehdimerkachi/.config/nvim".source = config.lib.file.mkOutOfStoreSymlink "/Users/mehdimerkachi/dotfiles/nvim";

  "/Users/mehdimerkachi/.config/tmux".source = config.lib.file.mkOutOfStoreSymlink "/Users/mehdimerkachi/dotfiles/tmux";

};
```
I had to use symlinks to maintain control over my files and ensure compatibility with specific tools like LazyVim inside tmux. This was necessary because when using Neovim within tmux, the lazy plugin manager couldn't update the plugins; the files in `~/.config/nvim` were owned by the root user, which prevented any modifications due to permission issues.

## Conclusion

The declarative nature of Nix-Darwin has fundamentally changed how I manage my macOS environment. By defining my entire system configuration in a single `flake.nix` file, I’m motivated to keep everything clean and organized, ensuring that every package and setting is intentional and reproducible. This approach not only enhances my workflow but also provides a clear structure that reduces clutter.

However, the transition hasn’t been without its challenges. Navigating the intricacies of Nix-Darwin often requires diving deep into forums and documentation to troubleshoot issues, which can be daunting at times. Despite these hurdles, the control and clarity that come with a declarative setup make the effort worthwhile for anyone serious about maintaining a well-organized system.

