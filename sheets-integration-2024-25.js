// Google Sheets Integration for 2024-25 Season Stats
class StatsManager2024 {
    constructor() {
        this.stats = {};
        this.init();
    }

    init() {
        console.log('Initializing 2024-25 season stats...');
        this.loadFallbackStats();
        this.updateDisplay();
    }

    loadFallbackStats() {
        // Harold's 2023-24 season stats (4 games: West Ranch, Castaic, Canyon, GVHS)
        this.stats = {
            receptions: { value: '17', label: 'Receptions', lastUpdated: '2023-10-26' },
            receiving_yards: { value: '287', label: 'Receiving Yards', lastUpdated: '2023-10-26' },
            receiving_tds: { value: '2', label: 'Receiving TDs', lastUpdated: '2023-10-26' },
            ypc: { value: '16.9', label: 'YPC', lastUpdated: '2023-10-26' },
            rushing_attempts: { value: '6', label: 'Rushing Attempts', lastUpdated: '2023-09-21' },
            rushing_yards: { value: '87', label: 'Rushing Yards', lastUpdated: '2023-09-21' },
            rushing_avg: { value: '14.5', label: 'Rushing Avg', lastUpdated: '2023-09-21' },
            rushing_long: { value: '37', label: 'Long Rush', lastUpdated: '2023-09-21' },
            total_points: { value: '12', label: 'Total Points', lastUpdated: '2023-10-26' },
            total_tds: { value: '2', label: 'Total TDs', lastUpdated: '2023-10-26' },
            kick_returns: { value: '0', label: 'Kick Return Yards', lastUpdated: '2023-10-26' },
            kick_return_avg: { value: '0', label: 'Kick Return Avg', lastUpdated: '2023-10-26' },
            kick_returns_count: { value: '0', label: 'Kick Returns', lastUpdated: '2023-10-26' },
            interception_returns: { value: '0', label: 'Interception Return Yards', lastUpdated: '2023-10-26' },
            all_purpose: { value: '374', label: 'All-Purpose Yards', lastUpdated: '2023-10-26' },
            tackles: { value: '0', label: 'Total Tackles', lastUpdated: '2023-10-26' },
            solo_tackles: { value: '0', label: 'Solo Tackles', lastUpdated: '2023-10-26' },
            assisted_tackles: { value: '0', label: 'Assisted Tackles', lastUpdated: '2023-10-26' },
            interceptions: { value: '0', label: 'Interceptions', lastUpdated: '2023-10-26' },
            pass_breakups: { value: '0', label: 'Pass Breakups', lastUpdated: '2023-10-26' },
            forced_fumbles: { value: '0', label: 'Forced Fumbles', lastUpdated: '2023-10-26' }
        };
    }

    // Update the display with current stats
    updateDisplay() {
        console.log('Updating display with 2024-25 stats:', this.stats);
        
        // Update receiving stats
        this.updateStat('receptions', this.stats.receptions?.value || '0');
        this.updateStat('receiving_yards', this.stats.receiving_yards?.value || '0');
        this.updateStat('receiving_tds', this.stats.receiving_tds?.value || '0');
        this.updateStat('ypc', this.stats.ypc?.value || '0');
        
        // Update rushing stats
        this.updateStat('rushing_attempts', this.stats.rushing_attempts?.value || '0');
        this.updateStat('rushing_yards', this.stats.rushing_yards?.value || '0');
        this.updateStat('rushing_avg', this.stats.rushing_avg?.value || '0');
        this.updateStat('rushing_long', this.stats.rushing_long?.value || '0');
        
        // Update scoring stats
        this.updateStat('total_points', this.stats.total_points?.value || '0');
        this.updateStat('total_tds', this.stats.total_tds?.value || '0');

        // Update special teams stats
        this.updateStat('kick_returns', this.stats.kick_returns?.value || '0');
        this.updateStat('kick_return_avg', this.stats.kick_return_avg?.value || '0');
        this.updateStat('kick_returns_count', this.stats.kick_returns_count?.value || '0');
        this.updateStat('interception_returns', this.stats.interception_returns?.value || '0');
        this.updateStat('all_purpose', this.stats.all_purpose?.value || '0');

        // Update defensive stats
        this.updateStat('tackles', this.stats.tackles?.value || '0');
        this.updateStat('solo_tackles', this.stats.solo_tackles?.value || '0');
        this.updateStat('assisted_tackles', this.stats.assisted_tackles?.value || '0');
        this.updateStat('interceptions', this.stats.interceptions?.value || '0');
        this.updateStat('pass_breakups', this.stats.pass_breakups?.value || '0');
        this.updateStat('forced_fumbles', this.stats.forced_fumbles?.value || '0');
    }

    updateStat(statName, value) {
        const elements = document.querySelectorAll(`[data-stat="${statName}"]`);
        elements.forEach(element => {
            if (element) {
                element.textContent = value;
                element.setAttribute('data-target', value);
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new StatsManager2024();
});
