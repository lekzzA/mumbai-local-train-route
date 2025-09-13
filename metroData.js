// Mumbai Suburban Railway System Data
const metroData = {    stations: {
        // Western Line - Vertical route from bottom to top
        'CCG': { 
            id: 'CCG', 
            name: 'Churchgate', 
            x: 400, 
            y: 580, 
            lines: ['western'] 
        },
        'MEL': { 
            id: 'MEL', 
            name: 'Marine Lines', 
            x: 400, 
            y: 560, 
            lines: ['western'] 
        },
        'CYR': { 
            id: 'CYR', 
            name: 'Charni Road', 
            x: 400, 
            y: 540, 
            lines: ['western'] 
        },
        'GTR': { 
            id: 'GTR', 
            name: 'Grant Road', 
            x: 400, 
            y: 520, 
            lines: ['western'] 
        },
        'MMCT': { 
            id: 'MMCT', 
            name: 'Mumbai Cent', 
            x: 400, 
            y: 500, 
            lines: ['western'] 
        },
        'MX': { 
            id: 'MX', 
            name: 'Mahalakshmi', 
            x: 400, 
            y: 480, 
            lines: ['western'] 
        },
        'PL': { 
            id: 'PL', 
            name: 'Lower Parel', 
            x: 400, 
            y: 460, 
            lines: ['western'] 
        },
        'PBHD': { 
            id: 'PBHD', 
            name: 'Prabhadevi', 
            x: 400, 
            y: 440, 
            lines: ['western'] 
        },
        'DDR': { 
            id: 'DDR', 
            name: 'Dadar', 
            x: 400, 
            y: 420, 
            lines: ['western'] 
        },        'MRU': { 
            id: 'MRU', 
            name: 'Matunga Road', 
            x: 400, 
            y: 400, 
            lines: ['western'] 
        },
        'MM': { 
            id: 'MM', 
            name: 'Mahim Jn', 
            x: 400, 
            y: 380, 
            lines: ['western', 'orange'] 
        },
        'BA': { 
            id: 'BA', 
            name: 'Bandra Jn', 
            x: 400, 
            y: 360, 
            lines: ['western', 'orange'] 
        },
        'KHAR': { 
            id: 'KHAR', 
            name: 'Khar Road', 
            x: 400, 
            y: 340, 
            lines: ['western', 'orange'] 
        },
        'STC': { 
            id: 'STC', 
            name: 'Santa Cruz', 
            x: 400, 
            y: 320, 
            lines: ['western', 'orange'] 
        },
        'VLP': { 
            id: 'VLP', 
            name: 'Ville Parle', 
            x: 400, 
            y: 300, 
            lines: ['western', 'orange'] 
        },
        'ADH': { 
            id: 'ADH', 
            name: 'Andheri', 
            x: 400, 
            y: 280, 
            lines: ['western', 'orange'] 
        },        'JOS': { 
            id: 'JOS', 
            name: 'Jogeshwari', 
            x: 400, 
            y: 260, 
            lines: ['western'] 
        },
        'RMAR': { 
            id: 'RMAR', 
            name: 'Ram Mandir', 
            x: 400, 
            y: 240, 
            lines: ['western'] 
        },
        'GMN': { 
            id: 'GMN', 
            name: 'Goregaon', 
            x: 400, 
            y: 220, 
            lines: ['western'] 
        },
        'MDD': { 
            id: 'MDD', 
            name: 'Malad', 
            x: 400, 
            y: 200, 
            lines: ['western'] 
        },
        'KILE': { 
            id: 'KILE', 
            name: 'Kandivli', 
            x: 400, 
            y: 180, 
            lines: ['western'] 
        },
        'BVI': { 
            id: 'BVI', 
            name: 'Borivali', 
            x: 400, 
            y: 160, 
            lines: ['western'] 
        },
        'DIC': { 
            id: 'DIC', 
            name: 'Dahisar', 
            x: 400, 
            y: 140, 
            lines: ['western'] 
        },
        'MIRA': { 
            id: 'MIRA', 
            name: 'Mira Road', 
            x: 400, 
            y: 120, 
            lines: ['western'] 
        },
        'BYR': { 
            id: 'BYR', 
            name: 'Bhayandar', 
            x: 400, 
            y: 100, 
            lines: ['western'] 
        },
        'NIG': { 
            id: 'NIG', 
            name: 'Naigaon', 
            x: 400, 
            y: 80, 
            lines: ['western'] 
        },
        'BSR': { 
            id: 'BSR', 
            name: 'Vasai Road', 
            x: 400, 
            y: 60, 
            lines: ['western'] 
        },
        'NSP': { 
            id: 'NSP', 
            name: 'Nalla Sopara', 
            x: 400, 
            y: 40, 
            lines: ['western'] 
        },
        'VR': { 
            id: 'VR', 
            name: 'Virar', 
            x: 400, 
            y: 20, 
            lines: ['western'] 
        },        // Orange Line - Andheri to CSMT (shares some stations with Western Line)
        'KCE': { 
            id: 'KCE', 
            name: 'Kings Circle', 
            x: 500, 
            y: 400, 
            lines: ['orange'] 
        },
        'VDLR': { 
            id: 'VDLR', 
            name: 'Vadala Road', 
            x: 500, 
            y: 420, 
            lines: ['orange', 'yellow'] 
        },
        'SVE': { 
            id: 'SVE', 
            name: 'Sewri', 
            x: 500, 
            y: 440, 
            lines: ['orange', 'yellow'] 
        },
        'CTGN': { 
            id: 'CTGN', 
            name: 'Cotton Green', 
            x: 500, 
            y: 460, 
            lines: ['orange', 'yellow'] 
        },
        'RRD': { 
            id: 'RRD', 
            name: 'Reay Road', 
            x: 500, 
            y: 480, 
            lines: ['orange', 'yellow'] 
        },
        'DKRD': { 
            id: 'DKRD', 
            name: 'Dockyard Road', 
            x: 500, 
            y: 500, 
            lines: ['orange', 'yellow'] 
        },
        'SNRD': { 
            id: 'SNRD', 
            name: 'Sandhurst Road', 
            x: 500, 
            y: 520, 
            lines: ['orange', 'yellow'] 
        },
        'MSD': { 
            id: 'MSD', 
            name: 'Masjid', 
            x: 500, 
            y: 540, 
            lines: ['orange', 'yellow'] 
        },
        'CSMT': { 
            id: 'CSMT', 
            name: 'C Shivaji Maharaj T', 
            x: 500, 
            y: 560, 
            lines: ['orange', 'yellow'] 
        },        // Yellow Line - CSMT to Panvel (Harbour Line) - branches from VDLR
        'GTBN': { 
            id: 'GTBN', 
            name: 'Guru Teghbahadurnagar', 
            x: 600, 
            y: 400, 
            lines: ['yellow'] 
        },
        'CHF': { 
            id: 'CHF', 
            name: 'Chunabhatti', 
            x: 600, 
            y: 380, 
            lines: ['yellow'] 
        },
        'CLA': { 
            id: 'CLA', 
            name: 'Kurla Jn', 
            x: 600, 
            y: 360, 
            lines: ['yellow'] 
        },
        'TKNG': { 
            id: 'TKNG', 
            name: 'Tilak Nagar', 
            x: 600, 
            y: 340, 
            lines: ['yellow'] 
        },
        'CMBR': { 
            id: 'CMBR', 
            name: 'Chembur', 
            x: 600, 
            y: 320, 
            lines: ['yellow'] 
        },
        'GV': { 
            id: 'GV', 
            name: 'Govandi', 
            x: 600, 
            y: 300, 
            lines: ['yellow'] 
        },
        'MNKD': { 
            id: 'MNKD', 
            name: 'Mankhurd', 
            x: 600, 
            y: 280, 
            lines: ['yellow'] 
        },
        'VSH': { 
            id: 'VSH', 
            name: 'Vashi', 
            x: 600, 
            y: 260, 
            lines: ['yellow'] 
        },
        'SNCR': { 
            id: 'SNCR', 
            name: 'Sanpada', 
            x: 600, 
            y: 240, 
            lines: ['yellow'] 
        },
        'JNJ': { 
            id: 'JNJ', 
            name: 'Juinagar', 
            x: 600, 
            y: 220, 
            lines: ['yellow'] 
        },
        'NEU': { 
            id: 'NEU', 
            name: 'Nerul', 
            x: 600, 
            y: 200, 
            lines: ['yellow'] 
        },
        'SWDV': { 
            id: 'SWDV', 
            name: 'Sea Wood Darave', 
            x: 600, 
            y: 180, 
            lines: ['yellow'] 
        },
        'BEPR': { 
            id: 'BEPR', 
            name: 'Belapur C B D', 
            x: 600, 
            y: 160, 
            lines: ['yellow'] 
        },
        'KHAG': { 
            id: 'KHAG', 
            name: 'Kharghar', 
            x: 600, 
            y: 140, 
            lines: ['yellow'] 
        },
        'MANR': { 
            id: 'MANR', 
            name: 'Mansarovar', 
            x: 600, 
            y: 120, 
            lines: ['yellow'] 
        },
        'KNDS': { 
            id: 'KNDS', 
            name: 'Khandeshwar', 
            x: 600, 
            y: 100, 
            lines: ['yellow'] 
        },
        'PNVL': { 
            id: 'PNVL', 
            name: 'Panvel', 
            x: 600, 
            y: 80, 
            lines: ['yellow'] 
        }
    },    lines: {
        western: {
            name: 'Western Line',
            color: '#4A90E2', // Blue
            stations: ['CCG', 'MEL', 'CYR', 'GTR', 'MMCT', 'MX', 'PL', 'PBHD', 'DDR', 'MRU', 'MM', 'BA', 'KHAR', 'STC', 'VLP', 'ADH', 'JOS', 'RMAR', 'GMN', 'MDD', 'KILE', 'BVI', 'DIC', 'MIRA', 'BYR', 'NIG', 'BSR', 'NSP', 'VR']
        },
        orange: {
            name: 'Orange Line',
            color: '#FF6B35', // Orange
            stations: ['ADH', 'VLP', 'STC', 'KHAR', 'BA', 'MM', 'KCE', 'VDLR', 'SVE', 'CTGN', 'RRD', 'DKRD', 'SNRD', 'MSD', 'CSMT']
        },
        yellow: {
            name: 'Yellow Line',
            color: '#FDD835', // Yellow
            stations: ['CSMT', 'MSD', 'SNRD', 'DKRD', 'RRD', 'CTGN', 'SVE', 'VDLR', 'GTBN', 'CHF', 'CLA', 'TKNG', 'CMBR', 'GV', 'MNKD', 'VSH', 'SNCR', 'JNJ', 'NEU', 'SWDV', 'BEPR', 'KHAG', 'MANR', 'KNDS', 'PNVL']
        }
    },
      
    // Direct connections between stations (for pathfinding) - Western Line only
    connections: {
        'CCG': ['MEL'],
        'MEL': ['CCG', 'CYR'],
        'CYR': ['MEL', 'GTR'],
        'GTR': ['CYR', 'MMCT'],
        'MMCT': ['GTR', 'MX'],
        'MX': ['MMCT', 'PL'],
        'PL': ['MX', 'PBHD'],
        'PBHD': ['PL', 'DDR'],
        'DDR': ['PBHD', 'MRU'],
        'MRU': ['DDR', 'MM'],
        'MM': ['MRU', 'BA', 'KCE'],
        'BA': ['MM', 'KHAR'],
        'KHAR': ['BA', 'STC'],
        'STC': ['KHAR', 'VLP'],
        'VLP': ['STC', 'ADH'],        'ADH': ['VLP', 'JOS'],
        'JOS': ['ADH', 'RMAR'],
        'RMAR': ['JOS', 'GMN'],
        'GMN': ['RMAR', 'MDD'],
        'MDD': ['GMN', 'KILE'],
        'KILE': ['MDD', 'BVI'],
        'BVI': ['KILE', 'DIC'],
        'DIC': ['BVI', 'MIRA'],
        'MIRA': ['DIC', 'BYR'],
        'BYR': ['MIRA', 'NIG'],
        'NIG': ['BYR', 'BSR'],
        'BSR': ['NIG', 'NSP'],        'NSP': ['BSR', 'VR'],
        'VR': ['NSP'],

        // Orange Line connections (ADH to CSMT via eastern route)
        // Note: ADH, VLP, STC, KHAR, BA, MM are shared with Western Line
        'KCE': ['MM', 'VDLR'],
        'VDLR': ['KCE', 'SVE', 'GTBN'],
        'SVE': ['VDLR', 'CTGN'],
        'CTGN': ['SVE', 'RRD'],
        'RRD': ['CTGN', 'DKRD'],
        'DKRD': ['RRD', 'SNRD'],
        'SNRD': ['DKRD', 'MSD'],
        'MSD': ['SNRD', 'CSMT'],        'CSMT': ['MSD'],

        // Yellow Line connections (CSMT to Panvel via eastern route)
        'GTBN': ['VDLR', 'CHF'],
        'CHF': ['GTBN', 'CLA'],
        'CLA': ['CHF', 'TKNG'],
        'TKNG': ['CLA', 'CMBR'],
        'CMBR': ['TKNG', 'GV'],
        'GV': ['CMBR', 'MNKD'],
        'MNKD': ['GV', 'VSH'],
        'VSH': ['MNKD', 'SNCR'],
        'SNCR': ['VSH', 'JNJ'],
        'JNJ': ['SNCR', 'NEU'],
        'NEU': ['JNJ', 'SWDV'],
        'SWDV': ['NEU', 'BEPR'],
        'BEPR': ['SWDV', 'KHAG'],
        'KHAG': ['BEPR', 'MANR'],
        'MANR': ['KHAG', 'KNDS'],
        'KNDS': ['MANR', 'PNVL'],
        'PNVL': ['KNDS']
    },
    
    // Travel times between connected stations (in minutes)
    travelTimes: {
        'CCG-MEL': 2,
        'MEL-CYR': 2,
        'CYR-GTR': 2,
        'GTR-MMCT': 3,
        'MMCT-MX': 2,
        'MX-PL': 2,
        'PL-PBHD': 2,
        'PBHD-DDR': 3,
        'DDR-MRU': 2,
        'MRU-MM': 2,
        'MM-BA': 3,
        'BA-KHAR': 2,
        'KHAR-STC': 2,
        'STC-VLP': 2,
        'VLP-ADH': 3,
        'ADH-JOS': 2,
        'JOS-RMAR': 2,
        'RMAR-GMN': 3,
        'GMN-MDD': 2,
        'MDD-KILE': 2,
        'KILE-BVI': 3,
        'BVI-DIC': 2,
        'DIC-MIRA': 3,
        'MIRA-BYR': 2,
        'BYR-NIG': 2,
        'NIG-BSR': 3,        'BSR-NSP': 2,
        'NSP-VR': 3,

        // Orange Line travel times
        'MM-KCE': 4,
        'KCE-VDLR': 3,
        'VDLR-SVE': 3,
        'SVE-CTGN': 3,
        'CTGN-RRD': 2,
        'RRD-DKRD': 2,
        'DKRD-SNRD': 2,        'SNRD-MSD': 2,
        'MSD-CSMT': 2,

        // Yellow Line travel times
        'VDLR-GTBN': 3,
        'GTBN-CHF': 3,
        'CHF-CLA': 4,
        'CLA-TKNG': 3,
        'TKNG-CMBR': 3,
        'CMBR-GV': 3,
        'GV-MNKD': 3,
        'MNKD-VSH': 4,
        'VSH-SNCR': 3,
        'SNCR-JNJ': 3,
        'JNJ-NEU': 3,
        'NEU-SWDV': 4,
        'SWDV-BEPR': 3,
        'BEPR-KHAG': 4,
        'KHAG-MANR': 3,
        'MANR-KNDS': 3,
        'KNDS-PNVL': 4
    }
};

// Helper function to get travel time between two connected stations
function getTravelTime(station1, station2) {
    const key1 = `${station1}-${station2}`;
    const key2 = `${station2}-${station1}`;
    return metroData.travelTimes[key1] || metroData.travelTimes[key2] || 3; // default 3 minutes
}
