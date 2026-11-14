import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ToastProvider, useToast } from '@/context/ToastContext';
import { Layout, type PageKey } from '@/components/Layout';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { UploadEvidence } from '@/pages/UploadEvidence';
import { EvidenceManagement } from '@/pages/EvidenceManagement';
import { AIAnalysis } from '@/pages/AIAnalysis';
import { BlockchainExplorer } from '@/pages/BlockchainExplorer';
import { Verification } from '@/pages/Verification';
import { AuditTrail } from '@/pages/AuditTrail';
import { Settings } from '@/pages/Settings';
import { ensureGenesis } from '@/utils/blockchain';
import { ensureDemoLoaded, hasDemoData } from '@/utils/demoData';

function Shell() {
  const { username } = useAuth();
  const toast = useToast();
  const [page, setPage] = useState<PageKey>('dashboard');
  const [demoLoaded, setDemoLoaded] = useState(hasDemoData());

  // Ensure genesis block exists on first load
  useEffect(() => {
    ensureGenesis();
  }, []);

  // Auto-load demo data on first ever login for a populated dashboard
  useEffect(() => {
    if (username && !hasDemoData()) {
      (async () => {
        try {
          await ensureDemoLoaded();
          setDemoLoaded(true);
        } catch {
          /* ignore */
        }
      })();
    } else if (username) {
      setDemoLoaded(true);
    }
  }, [username]);

  if (!username) return <Login />;

  const navigate = (p: PageKey) => setPage(p);

  const loadDemo = async () => {
    try {
      await ensureDemoLoaded();
      setDemoLoaded(true);
      toast.push('Demo data loaded', 'success');
    } catch {
      toast.push('Failed to load demo data', 'error');
    }
  };

  return (
    <Layout current={page} onNavigate={navigate}>
      {page === 'dashboard' && <Dashboard onNavigate={navigate} onLoadDemo={loadDemo} demoLoaded={demoLoaded} />}
      {page === 'upload' && <UploadEvidence onDone={navigate} />}
      {page === 'evidence' && <EvidenceManagement />}
      {page === 'ai' && <AIAnalysis />}
      {page === 'blockchain' && <BlockchainExplorer />}
      {page === 'verification' && <Verification />}
      {page === 'audit' && <AuditTrail />}
      {page === 'settings' && <Settings />}
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Shell />
      </ToastProvider>
    </AuthProvider>
  );
}
