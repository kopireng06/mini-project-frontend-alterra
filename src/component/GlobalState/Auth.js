import React, { useContext, useState, useEffect } from 'react'
import supabase from './supabase'

const AuthContext = React.createContext()

// fungsi untuk create provider
export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      // mengecek status auth
      const session = supabase.auth.session()
  
      setUser(session?.user ?? null)
      setLoading(false)
  
      // subscribe status auth
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user ?? null)
          setLoading(false)
        }
      )
  
      return () => {
        listener?.unsubscribe()
      }
    }, [])
  
    // nilai yang akan menjadi global di context
    const value = {
      signUp: (data) => supabase.auth.signUp(data),
      signIn: (data) => supabase.auth.signIn(data),
      signOut: () => supabase.auth.signOut(),
      user,
    }

    // return provider
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
  }

// custom hooks untuk melihat status dari auth
export function useAuth() {
    return useContext(AuthContext)
}