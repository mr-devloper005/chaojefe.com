'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, Menu, PlusCircle, Search, UserCircle2, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': 'rgba(255,255,255,0.86)', '--editable-nav-text': preset.colors.foreground, '--editable-nav-active': preset.colors.foreground, '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': preset.colors.foreground, '--editable-cta-text': '#ffffff', '--editable-search-bg': preset.colors.surface, '--editable-border': `${preset.colors.muted}24`, '--editable-container': '1180px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 px-3 py-3 text-[var(--editable-nav-text)] sm:px-4">
      <nav className="mx-auto flex min-h-[74px] w-full max-w-[var(--editable-container)] items-center gap-4 rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 shadow-[0_14px_44px_rgba(30,36,51,0.08)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4458e6] text-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-11 w-10 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[180px] truncate text-base font-black">{slot4BrandConfig.siteName}</span>
            <span className="block max-w-[180px] truncate text-[11px] font-bold uppercase tracking-[0.18em] opacity-55">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-xl items-center rounded-full border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search SBM resources" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/" className={`rounded-lg px-3 py-2 text-sm font-black transition ${pathname === '/' ? 'text-[#4458e6]' : 'hover:bg-black/5'}`}>Home</Link>
          <div className="group relative">
            
            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[min(86vw,1000px)] -translate-x-1/2 rounded-2xl border border-[var(--editable-border)] bg-[#f5f6f8] p-6 opacity-0 shadow-[0_28px_90px_rgba(30,36,51,0.16)] transition group-hover:visible group-hover:opacity-100">
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div className="space-y-2">
                  {['SBM Sites', 'High Authority', 'Niche Boards'].map((label, index) => (
                    <Link key={label} href="/sbm" className={`block rounded-lg px-4 py-3 text-sm font-black ${index === 0 ? 'bg-white text-[#202637]' : 'text-[#202637]/80 hover:bg-white'}`}>{label}</Link>
                  ))}
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {navItems.slice(0, 3).map((item, index) => (
                    <Link key={item.href} href={item.href} className="group/card block">
                      <div className="aspect-[16/9] rounded-lg bg-[linear-gradient(135deg,#0ea5e9,#4458e6_48%,#ff6b9a)] opacity-90 transition group-hover/card:scale-[1.02]" />
                      <h3 className="mt-3 line-clamp-2 text-base font-black leading-tight text-[#202637]">{index === 0 ? 'Curated social bookmarking resources' : item.label}</h3>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">3 min scan</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-lg px-3 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/5'}`}>
                {item.label}
              </Link>
            )
          })}
          <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-black hover:bg-black/5">Contact</Link>
          
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <span className="hidden max-w-[160px] items-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-3 py-2 text-sm font-black sm:inline-flex"><UserCircle2 className="h-4 w-4" /><span className="truncate">{session.name}</span></span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black">Logout {session.name}</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
