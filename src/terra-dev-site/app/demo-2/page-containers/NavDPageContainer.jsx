import React from 'react';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationGroup, NavigationItem } from '../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const NavDPageContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-D-1', 'nav-D-2', 'nav-D-3', 'nav-D-4', 'nav-D-5', 'nav-D-6']);

  return (
    <NavigationPageContainer
      enableWorkspace
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationGroup
        text="Group 1"
      >
        <NavigationItem
          navigationKey="nav-D-1"
          text="Nav D-1 Page 1"
          render={() => <Page1 />}
        />
        <NavigationItem
          navigationKey="nav-D-2"
          text="Nav D-2 Page 2"
          render={() => <Page2 />}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 2"
      >
        <NavigationItem
          navigationKey="nav-D-3"
          text="Nav D-3 Page 3"
          render={() => <Page3 />}
        />
        <NavigationItem
          navigationKey="nav-D-4"
          text="Nav D-4 Inline Page"
          render={() => (
            <ApplicationPage title="Inline Page">
              <div style={{ padding: '1rem' }}>
                Page content here...
              </div>
            </ApplicationPage>
          )}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 3"
      >
        <NavigationGroup
          text="Group 3`"
        >
          <NavigationItem
            navigationKey="nav-D-5"
            text="Nav D-5 Inline Page In Nested Group"
            render={() => (
              <ApplicationPage title="Inline Page In Nested Group">
                <div style={{ padding: '1rem' }}>
                  Page content here...
                </div>
              </ApplicationPage>
            )}
          />
        </NavigationGroup>
      </NavigationGroup>
      <NavigationItem
        navigationKey="nav-D-6"
        text="Nav D-6 Inline Page Not In Group"
        render={() => (
          <ApplicationPage title="Inline Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
    </NavigationPageContainer>
  );
};

export default NavDPageContainer;
