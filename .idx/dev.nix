# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # We need nodejs to run the http-server
    pkgs.nodejs_20
    # http-server is a simple, zero-configuration command-line http server.
    pkgs.nodePackages.http-server
  ];

  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];

    # This section configures the web preview.
    previews = {
      enable = true;
      previews = {
        # This defines a preview panel named "web".
        web = {
          # The command to run to start the web server.
          # "http-server" will serve the current directory by default.
          command = ["http-server"];
          manager = "web";
          env = {
            # IDX provides a $PORT environment variable.
            # We pass this to our server so it listens on the correct port.
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # e.g. "npm install"
      };
      # Runs when the workspace is (re)started
      onStart = {
        # The web server is started via the 'previews' configuration above,
        # so we don't need to do anything here.
      };
    };
  };
}
