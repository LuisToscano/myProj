import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsProvider {
  getConstants() {
    return {
		'components' : {
			'tags' : {
				'slide' : 'slide'
			}
		},
		'messages' : {
			'error' : {
				'noSlides' : 'There are no slides in the content'
			}
		}
	};
  }
}