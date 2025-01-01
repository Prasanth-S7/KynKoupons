import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/models/user.dart';

class UserProvider extends ChangeNotifier {
  User _user = User(
    id: '1',
    name: 'Alex Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    rewardPoints: 750,
  );
  
  User get user => _user;
  int get rewardPoints => _user.rewardPoints;

  Future<void> fetchUserData() async {
    // Simulate API call
    await Future.delayed(const Duration(seconds: 1));
    _user = User(
      id: '1',
      name: 'Alex Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      rewardPoints: 750,
    );
    notifyListeners();
  }

  Future<void> updateRewardPoints(int points) async {
    // Simulate API call
    await Future.delayed(const Duration(milliseconds: 500));
    _user = User(
      id: _user.id,
      name: _user.name,
      avatarUrl: _user.avatarUrl,
      rewardPoints: _user.rewardPoints + points,
    );
    notifyListeners();
  }
}