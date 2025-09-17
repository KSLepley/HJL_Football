// Google Sheets Integration for Real-Time Stats
// This will pull Harold's stats from Google Sheets and update the website

class StatsUpdater {
    constructor() {
        this.sheetId = ''; // Will be set when you provide the Google Sheet ID
        this.apiKey = ''; // Will be set when you get API key
        this.stats = {};
    }

    // Initialize the stats updater
    async init(sheetId) {
        this.sheetId = sheetId;
        await this.loadStats();
        this.updateDisplay();
    }

    // Load stats from Google Sheets using CSV export
    async loadStats() {
        try {
            // Use CSV export URL (no API key needed)
            const url = `https://docs.google.com/spreadsheets/d/${this.sheetId}/export?format=csv&gid=0`;
            const response = await fetch(url);
            const csvText = await response.text();
            
            if (csvText) {
                this.parseCSV(csvText);
            } else {
                console.log('Using fallback stats - Google Sheets not available');
                this.loadFallbackStats();
            }
        } catch (error) {
            console.log('Using fallback stats - Google Sheets not available');
            this.loadFallbackStats();
        }
    }

    // Parse CSV data
    parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length >= 2 && values[0].trim()) {
                this.stats[values[0].trim()] = {
                    value: values[1].trim(),
                    label: values[2] ? values[2].trim() : values[0].trim(),
                    lastUpdated: values[3] ? values[3].trim() : 'Unknown'
                };
            }
        }
    }

    // Fallback stats if Google Sheets is unavailable
    loadFallbackStats() {
        // Harold's current season stats from MaxPreps
        this.stats = {
            receptions: { value: '15', label: 'Receptions', lastUpdated: '2024-09-16' },
            receiving_yards: { value: '320', label: 'Yards', lastUpdated: '2024-09-16' },
            receiving_tds: { value: '5', label: 'Touchdowns', lastUpdated: '2024-09-16' },
            ypc: { value: '21.3', label: 'YPC', lastUpdated: '2024-09-16' },
            tackles: { value: '0', label: 'Tackles', lastUpdated: '2024-09-16' },
            interceptions: { value: '0', label: 'Interceptions', lastUpdated: '2024-09-16' },
            pass_breakups: { value: '0', label: 'Pass Breakups', lastUpdated: '2024-09-16' },
            forced_fumbles: { value: '0', label: 'Forced Fumbles', lastUpdated: '2024-09-16' }
        };
    }

    // Update the display with current stats
    updateDisplay() {
        console.log('Updating display with stats:', this.stats);
        
        // Update receiving stats
        this.updateStat('receptions', this.stats.receptions?.value || '0');
        this.updateStat('receiving_yards', this.stats.receiving_yards?.value || '0');
        this.updateStat('receiving_tds', this.stats.receiving_tds?.value || '0');
        this.updateStat('ypc', this.stats.ypc?.value || '0');

        // Update defensive stats
        this.updateStat('tackles', this.stats.tackles?.value || '0');
        this.updateStat('interceptions', this.stats.interceptions?.value || '0');
        this.updateStat('pass_breakups', this.stats.pass_breakups?.value || '0');
        this.updateStat('forced_fumbles', this.stats.forced_fumbles?.value || '0');

        // Add last updated info
        this.addLastUpdated();
    }

    // Update individual stat value
    updateStat(statType, value) {
        const elements = document.querySelectorAll(`[data-stat="${statType}"]`);
        elements.forEach(element => {
            element.textContent = value;
        });
    }

    // Add last updated timestamp
    addLastUpdated() {
        const lastUpdated = this.stats.receptions?.lastUpdated || '2024-09-16';
        const timestamp = document.querySelector('.last-updated');
        if (timestamp) {
            timestamp.textContent = `Last updated: ${lastUpdated}`;
        }
    }

    // Refresh stats (can be called manually)
    async refresh() {
        await this.loadStats();
        this.updateDisplay();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Harold's Google Sheet ID
    const SHEET_ID = '1axNOpctbgcWD4GV-PRHIwDIRrBagyM8yiUVVJsMC7zc';
    
    if (SHEET_ID !== 'YOUR_GOOGLE_SHEET_ID_HERE') {
        const statsUpdater = new StatsUpdater();
        statsUpdater.init(SHEET_ID);
    }
});

// Export for use in other scripts
window.StatsUpdater = StatsUpdater;
