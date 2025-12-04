# Yellow-Pages PH – GitHub Pages edition
Live demo: https://Areiba07.github.io/yellow-pages-ph/

## How to switch ON real database
1. Create Supabase project → paste `SUPABASE_URL` & `SUPABASE_ANON` in `js/settings.js`  
2. Set `window.USE_DEMO = false;`  
3. Replace `js/data.js` fetch with:
   ```javascript
   const {data} = await supabase.from('businesses').select('*');
   window.FAKE_PH = data;
