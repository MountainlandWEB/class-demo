import { Component, OnInit } from '@angular/core';
import { Plugins, LocalNotification, LocalNotificationEnabledResult, LocalNotificationActionPerformed, Device } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
const { LocalNotifications } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private alert: AlertController) {}

  async ngOnInit() {
    await LocalNotifications.requestPermission();
  }

  async scheduleBasic() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Git r done!',
          body: 'Start your daily read',
          id: 1
        }
      ]
    });
  }

  async scheduleAdvanced() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Are you still awake?',
          body: 'This message was scheduled much previously.',
          id: 2,
          schedule: { at: new Date(Date.now() + 3000)}
        }
      ]
    });
  }

  async scheduleRepeat() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Buhler?',
          body: 'Buhler?',
          id: 3,
          schedule: {
            //  at: new Date(Date.now()),
            //  repeats: true,
             every: 'minute',
            //  count: 5
          }
        }
      ]
    });
  }

}
