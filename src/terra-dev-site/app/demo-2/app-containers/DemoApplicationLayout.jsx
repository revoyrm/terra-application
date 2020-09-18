import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '../../../../application-modal/ApplicationModal';
import ApplicationNavigationLayout, { NavigationItem } from '../../../../application-layouts/ApplicationNavigationLayout';
import useNavigationState from '../../../../navigation/useNavigationState';

import { PatientConceptContext } from './patient-concept/PatientConceptProvider';

import NavAPageContainer from '../page-containers/NavAPageContainer';
import NavBPageContainer from '../page-containers/NavBPageContainer';
import NavCPageContainer from '../page-containers/NavCPageContainer';
import NavDPageContainer from '../page-containers/NavDPageContainer';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const DemoApplicationLayout = () => {
  const patientContext = React.useContext(PatientConceptContext);

  const [navigationState, setNavigationState] = useNavigationState(['nav-A', 'nav-B', 'nav-C', 'nav-D']);
  const [loggedOut, setLoggedOut] = useState(false);
  const [showSearchModal, setShowSearchModal] = React.useState(false);

  const primaryConceptView = React.useMemo(() => (patientContext.patientData
    ? (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Application Context Banner (
          {patientContext.patientData}
          )
        </div>
      </div>
    )
    : undefined), [patientContext.patientData]);

  const modalConceptView = React.useMemo(() => (patientContext.patientData
    ? (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'blue', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Modal Application Context Banner (
          {patientContext.patientData}
          )
        </div>
      </div>
    )
    : undefined), [patientContext.patientData]);

  if (loggedOut) {
    return (
      <div>
        <p>Logged Out</p>
        <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
      </div>
    );
  }

  return (
    <>
      <ApplicationNavigationLayout
        titleConfig={{ title: 'Demo Application' }}
        userConfig={userConfig}
        extensionItems={[{
          key: 'search',
          icon: <IconSearch />,
          text: 'Search',
        }]}
        onSelectExtensionItem={(itemKey) => {
          if (itemKey === 'search') {
            setShowSearchModal(true);
          }
        }}
        onSelectLogout={() => {
          setLoggedOut(true);
        }}
        onSelectSettings={() => {}}
        onSelectHelp={() => {}}
        activeNavigationKey={navigationState}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        primaryConceptBanner={primaryConceptView}
        modalConceptBanner={modalConceptView}
      >
        <NavigationItem
          navigationKey="nav-A"
          text="Nav A"
          render={() => <NavAPageContainer />}
        />
        <NavigationItem
          navigationKey="nav-B"
          text="Nav B"
          render={() => <NavBPageContainer />}
        />
        <NavigationItem
          navigationKey="nav-C"
          text="Nav C"
          render={() => <NavCPageContainer />}
        />
        <NavigationItem
          navigationKey="nav-D"
          text="Nav D"
          render={() => <NavDPageContainer />}
        />
      </ApplicationNavigationLayout>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { patientContext.updatePatient('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { patientContext.updatePatient('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { patientContext.updatePatient('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default DemoApplicationLayout;
