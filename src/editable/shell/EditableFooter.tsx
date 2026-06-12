'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Search, Send } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': 'var(--editable-page-bg, #f5f7fb)', '--editable-footer-text': 'var(--editable-page-text, #1e2433)' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-white text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-[var(--editable-border)] bg-[#f5f7fb] p-6 shadow-[0_18px_58px_rgba(30,36,51,0.07)] lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:p-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4458e6] text-white">
                <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-11 w-10 object-contain" />
              </span>
              <span>
                <span className="block text-lg font-black">{slot4BrandConfig.siteName}</span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] opacity-55">{globalContent.footer.tagline}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description || SITE_CONFIG.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/sbm" className="inline-flex items-center gap-2 rounded-lg bg-[#202637] px-4 py-2.5 text-sm font-black text-white">Browse SBM <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/search?task=sbm" className="inline-flex items-center gap-2 rounded-lg border border-[var(--editable-border)] bg-white px-4 py-2.5 text-sm font-black"><Search className="h-4 w-4" /> Search</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] opacity-55">Explore</h3>
            <div className="mt-4 grid gap-2">
              {taskLinks.map((task) => (
                <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                  {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] opacity-55">Submit</h3>
            <div className="mt-4 grid gap-2">
              <Link href="/create" className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">Create bookmark <Send className="h-3.5 w-3.5" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">Suggest resource <ArrowUpRight className="h-3.5 w-3.5" /></Link>
              {session ? (
                <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout {session.name}</button>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-bold opacity-75 hover:opacity-100">Login</Link>
                  <Link href="/signup" className="text-sm font-bold opacity-75 hover:opacity-100">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        &copy; {year} {slot4BrandConfig.siteName}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
