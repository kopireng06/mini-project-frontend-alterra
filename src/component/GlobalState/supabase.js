import { createClient } from '@supabase/supabase-js'

// membuat instance supabase baru dengan config dari .env
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_PUBLIC_KEY
)

export default supabase;