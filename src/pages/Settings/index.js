import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { MdAdd } from 'react-icons/md';

import { ContentPage } from '../../styles/global';
import {
  PageTitle,
  ContentRules,
  TitleRules,
  SettingRules,
  CardRule,
  TitleCardRule,
  InputNaked,
  ContentRuleRole,
  InputRole,
  LineLink,
} from './styles';

export default function Settings() {
  const [rulesUser, setRulesUser] = useState({ max: 8, min: 2 });
  const [rulesRoles, setRuleRoles] = useState([
    { name: 'dev-front', value: 2 },
    { name: 'dev-back', value: 2 },
    { name: 'ui/ux design', value: 2 },
    { name: 'marketing', value: 2 },
    { name: 'business', value: 2 },
  ]);

  function handleUserRules({ target }) {
    setRulesUser({ ...rulesUser, [target.name]: target.value });
  }

  function handleRolesRule({ target }) {
    switch (target.type) {
      case 'number': {
        const change = rulesRoles.map((role, index) =>
          String(index) === target.name
            ? { name: role.name, value: Number(target.value) }
            : role
        );
        setRuleRoles([...change]);
        break;
      }
      default:
    }
  }

  return (
    <>
      <PageTitle>Settings</PageTitle>
      <ContentPage>
        <ContentRules>
          <TitleRules>Rules</TitleRules>
          <SettingRules>
            <CardRule margintop="true">
              <TitleCardRule>Max Team Users</TitleCardRule>
              <div className="divider" />
              <InputNaked
                type="number"
                name="max"
                value={rulesUser.max}
                onChange={handleUserRules}
              />
            </CardRule>
            <CardRule margintop="true">
              <TitleCardRule>Min Team Roles</TitleCardRule>
              <div className="divider" />
              <InputNaked
                type="number"
                name="min"
                min={2}
                step={1}
                value={rulesUser.min}
                onChange={handleUserRules}
              />
            </CardRule>
          </SettingRules>
        </ContentRules>
        <ContentRules>
          <TitleRules>
            User Roles
            <IconButton>
              <MdAdd size={30} color="#FF5700" />
            </IconButton>
          </TitleRules>
          <SettingRules>
            {rulesRoles.map((role, index) => (
              <ContentRuleRole key={role.name}>
                <InputRole type="text" name={String(index)} value={role.name} />
                <LineLink />
                <CardRule>
                  <TitleCardRule>Max Per Team</TitleCardRule>
                  <div className="divider" />
                  <InputNaked
                    type="number"
                    name={String(index)}
                    value={role.value}
                    onChange={handleRolesRule}
                  />
                </CardRule>
              </ContentRuleRole>
            ))}
          </SettingRules>
        </ContentRules>
      </ContentPage>
    </>
  );
}
