import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonStory from '../components/button/story.js'
import SpinnerStory from '../components/spinner/story.js'

import '../components/theme.scss'
import './style.scss'

storiesOf('Buttons', module)
  .add('Button', ButtonStory)
  .add('Spinner', SpinnerStory)
