import 'package:flutter/material.dart';

class GoogleNavBar extends StatelessWidget {
  final int selectedIndex;
  final Function(int) onIndexSelected;

  const GoogleNavBar({
    required this.selectedIndex,
    required this.onIndexSelected,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: Theme.of(context).scaffoldBackgroundColor,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 20,
            spreadRadius: 1,
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _NavBarItem(
            icon: Icons.home_rounded,
            label: 'Home',
            isSelected: selectedIndex == 0,
            onTap: () => onIndexSelected(0),
            isDark: isDark,
          ),
          _NavBarItem(
            icon: Icons.emoji_events_rounded,
            label: 'Rewards',
            isSelected: selectedIndex == 1,
            onTap: () => onIndexSelected(1),
            isDark: isDark,
          ),
          _NavBarItem(
            icon: Icons.workspace_premium_rounded,
            label: 'Achievements',
            isSelected: selectedIndex == 2,
            onTap: () => onIndexSelected(2),
            isDark: isDark,
          ),
          _NavBarItem(
            icon: Icons.person_rounded,
            label: 'Profile',
            isSelected: selectedIndex == 3,
            onTap: () => onIndexSelected(3),
            isDark: isDark,
          ),
        ],
      ),
    );
  }
}

class _NavBarItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isSelected;
  final VoidCallback onTap;
  final bool isDark;

  const _NavBarItem({
    required this.icon,
    required this.label,
    required this.isSelected,
    required this.onTap,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: Duration(milliseconds: 200),
        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: isSelected
              ? (isDark ? Colors.white.withOpacity(0.1) : Colors.black.withOpacity(0.05))
              : Colors.transparent,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              color: isSelected
                  ? Theme.of(context).primaryColor
                  : Theme.of(context).iconTheme.color?.withOpacity(0.7),
            ),
            if (isSelected) ...[
              SizedBox(width: 8),
              Text(
                label,
                style: TextStyle(
                  color: isSelected
                      ? Theme.of(context).primaryColor
                      : Theme.of(context).textTheme.bodyLarge?.color?.withOpacity(0.7),
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}