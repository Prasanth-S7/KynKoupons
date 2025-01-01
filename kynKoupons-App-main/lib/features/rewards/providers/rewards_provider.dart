import 'package:flutter/material.dart';

class RewardsProvider with ChangeNotifier {
  int _points = 0;
  List<String> _achievements = [];

  int get points => _points;
  List<String> get achievements => _achievements;

  void addPoints(int amount) {
    _points += amount;
    notifyListeners();
  }

  void unlockAchievement(String achievement) {
    if (!_achievements.contains(achievement)) {
      _achievements.add(achievement);
      notifyListeners();
    }
  }
}