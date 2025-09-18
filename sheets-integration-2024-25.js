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
        // Harold's 2024-25 season stats (placeholder - will be updated with actual stats)
        this.stats = {
            receptions: { value: '0', label: 'Receptions', lastUpdated: '2024-09-12' },
            receiving_yards: { value: '0', label: 'Receiving Yards', lastUpdated: '2024-09-12' },
            receiving_tds: { value: '0', label: 'Receiving TDs', lastUpdated: '2024-09-12' },
            ypc: { value: '0', label: 'YPC', lastUpdated: '2024-09-12' },
            total_points: { value: '0', label: 'Total Points', lastUpdated: '2024-09-12' },
            total_tds: { value: '0', label: 'Total TDs', lastUpdated: '2024-09-12' },
            kick_returns: { value: '0', label: 'Kick Return Yards', lastUpdated: '2024-09-12' },
            kick_return_avg: { value: '0', label: 'Kick Return Avg', lastUpdated: '2024-09-12' },
            kick_returns_count: { value: '0', label: 'Kick Returns', lastUpdated: '2024-09-12' },
            interception_returns: { value: '0', label: 'Interception Return Yards', lastUpdated: '2024-09-12' },
            all_purpose: { value: '0', label: 'All-Purpose Yards', lastUpdated: '2024-09-12' },
            tackles: { value: '0', label: 'Total Tackles', lastUpdated: '2024-09-12' },
            solo_tackles: { value: '0', label: 'Solo Tackles', lastUpdated: '2024-09-12' },
            assisted_tackles: { value: '0', label: 'Assisted Tackles', lastUpdated: '2024-09-12' },
            interceptions: { value: '0', label: 'Interceptions', lastUpdated: '2024-09-12' },
            pass_breakups: { value: '0', label: 'Pass Breakups', lastUpdated: '2024-09-12' },
            forced_fumbles: { value: '0', label: 'Forced Fumbles', lastUpdated: '2024-09-12' }
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
