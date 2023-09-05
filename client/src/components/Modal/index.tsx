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
            <div className="bg-white rounded-lg p-6 animate-fade-in">
              <h2 className="text-lg font-medium mb-2">Welcome back!</h2>
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
