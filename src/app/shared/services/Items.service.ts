import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';
import {Item, ItemType} from '../models/items.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  currentItemType = new BehaviorSubject(ItemType.All);
  searchInItemsKeyWord = new BehaviorSubject('');


  constructor(public db: AngularFirestore) {
  }

  getItems() {
    return this.db.collection<Item>('items').snapshotChanges();
  }

  getUserItems(currentUserId: string) {
    return this.db.collection<Item>('items', ref => ref.where('uid', '==', currentUserId)).snapshotChanges();
  }

  createItem(item: Item) {
    return this.db.collection('items').add(item);
  }

  updateItem(item: Item) {
    this.db.doc('items/' + item.id).update(item);
  }

  deleteItem(itemId: string) {
    this.db.doc('items/' + itemId).delete();
  }
}
