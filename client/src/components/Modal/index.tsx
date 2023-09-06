import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function LoginMssgBox() {
  useEffect(() => {
    const loginTimer = setTimeout(() => {
      const domNode = document.getElementById('root')!,
        root = createRoot(domNode);

      if (root instanceof Element) {
        root.render(
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="p-6 bg-white rounded-lg animate-fade-in">
              <h2 className="mb-2 text-lg font-medium">Welcome back!</h2>
              <p>You have successfully logged in.</p>
            </div>
          </div>
        );

        const unmountTimer = setTimeout(() => {
          if (root instanceof Element) {
            root.classList.remove('animate-fade-in');
            root.classList.add('animate-fade-out');
            setTimeout(() => {
              root.unmount();
            }, 500);
          }
        }, 1000);
        return () => {
          clearTimeout(loginTimer);
          clearTimeout(unmountTimer);
        };
      }
    }, 1000);
    return () => clearTimeout(loginTimer);
  }, []);

  return null;
}

export default LoginMssgBox;
