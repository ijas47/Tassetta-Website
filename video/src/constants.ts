export const FPS = 30;
export const W = 1920;
export const H = 1080;

// Beat timing (frames). 30 sec cut = 900 frames.
export const B = {
  beat1: { start: 0, end: 180 },     // 0–6s   State board
  beat2: { start: 180, end: 360 },   // 6–12s  Order tape → threshold crossed
  beat3: { start: 360, end: 660 },   // 12–22s Three-move solution
  beat4: { start: 660, end: 810 },   // 22–27s You watch it / We file it
  beat5: { start: 810, end: 900 },   // 27–30s CTA
} as const;

export const DURATION_FRAMES = 900;

export const C = {
  ink: '#0f1b1a',
  body: '#41504d',
  mute: '#7a8783',
  ground: '#eef2f0',
  panel: '#ffffff',
  panel2: '#f4f7f5',
  border: '#dde5e2',
  primary: '#0d7d72',
  primaryActive: '#0a655c',
  pale: '#d9ede9',
  dark: '#0a1413',
  onDark: '#c7d2cf',
  sevNeg: '#d03238',
  sevNegPale: '#fbe4e5',
  sevWarn: '#a67512',
  sevWarnPale: '#fbecc9',
  sevPos: '#2ead4b',
  sevPosPale: '#d3ecd8',
};

// 50 states + DC used for the hero board. Status derived from the explainer scenario.
export type StateTile = { code: string; status: 'neg' | 'warn' | 'pos'; amount?: string };
export const STATES: StateTile[] = [
  { code: 'AL', status: 'pos' }, { code: 'AK', status: 'pos' }, { code: 'AZ', status: 'pos' },
  { code: 'AR', status: 'pos' }, { code: 'CA', status: 'neg', amount: '$412K' },
  { code: 'CO', status: 'pos' }, { code: 'CT', status: 'pos' }, { code: 'DE', status: 'pos' },
  { code: 'DC', status: 'pos' }, { code: 'FL', status: 'warn', amount: '96%' },
  { code: 'GA', status: 'warn', amount: '88%' }, { code: 'HI', status: 'pos' },
  { code: 'ID', status: 'pos' }, { code: 'IL', status: 'neg', amount: '$188K' },
  { code: 'IN', status: 'pos' }, { code: 'IA', status: 'pos' }, { code: 'KS', status: 'pos' },
  { code: 'KY', status: 'pos' }, { code: 'LA', status: 'pos' }, { code: 'ME', status: 'pos' },
  { code: 'MD', status: 'pos' }, { code: 'MA', status: 'neg', amount: '$142K' },
  { code: 'MI', status: 'pos' }, { code: 'MN', status: 'pos' }, { code: 'MS', status: 'pos' },
  { code: 'MO', status: 'pos' }, { code: 'MT', status: 'pos' }, { code: 'NE', status: 'pos' },
  { code: 'NV', status: 'pos' }, { code: 'NH', status: 'pos' },
  { code: 'NJ', status: 'warn', amount: '92%' }, { code: 'NM', status: 'pos' },
  { code: 'NY', status: 'neg', amount: '$276K' }, { code: 'NC', status: 'pos' },
  { code: 'ND', status: 'pos' }, { code: 'OH', status: 'pos' }, { code: 'OK', status: 'pos' },
  { code: 'OR', status: 'pos' }, { code: 'PA', status: 'pos' }, { code: 'RI', status: 'pos' },
  { code: 'SC', status: 'pos' }, { code: 'SD', status: 'pos' }, { code: 'TN', status: 'pos' },
  { code: 'TX', status: 'neg', amount: '$318K' }, { code: 'UT', status: 'pos' },
  { code: 'VT', status: 'pos' }, { code: 'VA', status: 'pos' },
  { code: 'WA', status: 'warn', amount: '84%' }, { code: 'WV', status: 'neg', amount: '$118K' },
  { code: 'WI', status: 'pos' }, { code: 'WY', status: 'pos' },
];

// Order tape rows for beat 2. Running total ends at $100,020 CA to trigger the crossing.
export const ORDER_ROWS = [
  { id: '#4127', city: 'Austin, TX', amount: 138.50 },
  { id: '#4128', city: 'Denver, CO', amount: 76.20 },
  { id: '#4129', city: 'Miami, FL', amount: 212.00 },
  { id: '#4130', city: 'Portland, OR', amount: 88.40 },
  { id: '#4131', city: 'Chicago, IL', amount: 194.60 },
  { id: '#4132', city: 'Los Angeles, CA', amount: 322.10 },
  { id: '#4133', city: 'Nashville, TN', amount: 55.90 },
  { id: '#4134', city: 'Boston, MA', amount: 178.30 },
  { id: '#4135', city: 'Seattle, WA', amount: 265.00 },
  { id: '#4136', city: 'Brooklyn, NY', amount: 149.20 },
  { id: '#4137', city: 'San Diego, CA', amount: 401.80 },
  { id: '#4138', city: 'Atlanta, GA', amount: 96.50 },
  { id: '#4139', city: 'Phoenix, AZ', amount: 62.40 },
  { id: '#4140', city: 'San Francisco, CA', amount: 519.00 },
  { id: '#4141', city: 'Sacramento, CA', amount: 268.90 },
];
