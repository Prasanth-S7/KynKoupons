import 'package:flutter/material.dart';

class SearchProvider with ChangeNotifier {
  String _searchQuery = '';
  bool _isSearching = false;

  String get searchQuery => _searchQuery;
  bool get isSearching => _isSearching;

  void updateSearch(String query) {
    _searchQuery = query;
    _isSearching = query.isNotEmpty;
    notifyListeners();
  }
}