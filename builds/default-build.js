module.exports = {
    board_env: "STM32F103RE_creality",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["Y_BED_SIZE", 410],
            ["X_BED_SIZE", 200],
            
            ["X_MIN_POS", 35],
            ["X_MAX_POS", 235],
            
            ["CUSTOM_MACHINE_NAME", "griddle v0"],
        ]
        
    }
};

