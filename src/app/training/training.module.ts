import { NgModule } from '@angular/core';
import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { StopTrainingComponent } from './current-training/stop--training.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../shared/shared.module';
import { TrainingRoutingModule } from './training-router.module';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent,
  ],
  imports: [TrainingRoutingModule, SharedModule, AngularFirestoreModule],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
